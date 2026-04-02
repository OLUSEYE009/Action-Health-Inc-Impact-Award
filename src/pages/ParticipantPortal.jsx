import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { motion } from 'framer-motion';

const ParticipantPortal = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [participants, setParticipants] = useLocalStorage('participants', []);
  const [currentLevel, setCurrentLevel] = useState('Spark'); // Mock level

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    mediaLink: ''
  });

  const handleSubmitProject = (e) => {
    e.preventDefault();
    const project = {
      ...newProject,
      id: Date.now(),
      participantId: user.email,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    setProjects([...projects, project]);
    setNewProject({ title: '', description: '', mediaLink: '' });
  };

  const userProjects = projects.filter(p => p.participantId === user.email);

  const awardLevels = {
    Spark: { emoji: '🔥', color: 'text-orange-500' },
    Ripple: { emoji: '🌊', color: 'text-blue-500' },
    Beacon: { emoji: '🌟', color: 'text-yellow-500' },
    Legacy: { emoji: '🌍', color: 'text-green-500' }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Participant Dashboard</h1>

      {/* Current Level */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Current Level</h2>
        <div className="flex items-center">
          <motion.span
            className={`text-4xl mr-4 ${awardLevels[currentLevel].color}`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {awardLevels[currentLevel].emoji}
          </motion.span>
          <div>
            <h3 className="text-xl font-bold">{currentLevel}</h3>
            <p className="text-gray-600">Keep submitting projects to level up!</p>
          </div>
        </div>
      </div>

      {/* Submit Project Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Submit New Project</h2>
        <form onSubmit={handleSubmitProject} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo/Video Link</label>
            <input
              type="url"
              value={newProject.mediaLink}
              onChange={(e) => setNewProject({...newProject, mediaLink: e.target.value})}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Project
          </button>
        </form>
      </div>

      {/* Impact Journal */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Impact Journal</h2>
        {userProjects.length === 0 ? (
          <p className="text-gray-600">No projects submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {userProjects.map(project => (
              <div key={project.id} className="border border-gray-200 rounded p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">Status: {project.status}</p>
                {project.mediaLink && (
                  <a href={project.mediaLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    View Media
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantPortal;