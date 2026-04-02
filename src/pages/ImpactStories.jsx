import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ImpactStories = () => {
  const [projects] = useLocalStorage('projects', []);
  const [filter, setFilter] = useState('all');

  const approvedProjects = projects.filter(p => p.status === 'approved');

  const filteredProjects = filter === 'all' ? approvedProjects : approvedProjects.filter(p => p.category === filter);

  const categories = ['all', 'environment', 'education', 'health', 'community'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Impact Stories</h1>

      {/* Filter */}
      <div className="mb-8 text-center">
        <label className="mr-4 font-semibold">Filter by Theme:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {project.mediaLink && (
              <img
                src={project.mediaLink}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.style.display = 'none'}
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-primary">By: {project.participantId}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No impact stories available yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default ImpactStories;