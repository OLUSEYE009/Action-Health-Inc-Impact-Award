import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FacilitatorPortal = () => {
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [participants] = useLocalStorage('participants', []);

  const handleApprove = (projectId) => {
    setProjects(projects.map(p =>
      p.id === projectId ? { ...p, status: 'approved' } : p
    ));
  };

  const handleReject = (projectId) => {
    setProjects(projects.map(p =>
      p.id === projectId ? { ...p, status: 'rejected' } : p
    ));
  };

  // Mock analytics data
  const participationData = [
    { name: 'Jan', projects: 4 },
    { name: 'Feb', projects: 7 },
    { name: 'Mar', projects: 5 },
    { name: 'Apr', projects: 9 },
  ];

  const categoryData = [
    { name: 'Environment', value: 30, color: '#008000' },
    { name: 'Education', value: 25, color: '#1E90FF' },
    { name: 'Health', value: 20, color: '#FF8C00' },
    { name: 'Community', value: 25, color: '#FFD700' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Facilitator Portal</h1>

      {/* Project Submissions */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Submissions</h2>
        {projects.length === 0 ? (
          <p className="text-gray-600">No submissions yet.</p>
        ) : (
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="border border-gray-200 rounded p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">Submitted by: {project.participantId}</p>
                <p className="text-sm text-gray-500">Status: {project.status}</p>
                {project.mediaLink && (
                  <a href={project.mediaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mr-4">
                    View Media
                  </a>
                )}
                {project.status === 'pending' && (
                  <div className="mt-2">
                    <button
                      onClick={() => handleApprove(project.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(project.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Participation Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={participationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#1E90FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Project Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-primary">{participants.length}</h3>
          <p className="text-gray-600">Total Participants</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-primary">{projects.length}</h3>
          <p className="text-gray-600">Total Projects</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-primary">{projects.filter(p => p.status === 'approved').length}</h3>
          <p className="text-gray-600">Approved Projects</p>
        </div>
      </div>
    </div>
  );
};

export default FacilitatorPortal;