import React from 'react';
import { motion } from 'framer-motion';

const AwardLevelsPage = () => {
  const levels = [
    {
      name: 'Spark',
      icon: '🔥',
      color: 'text-orange-500',
      description: 'First steps in community impact',
      criteria: [
        'Complete 1 community project',
        'Document impact with photos/videos',
        'Share learnings with peers'
      ]
    },
    {
      name: 'Ripple',
      icon: '🌊',
      color: 'text-blue-500',
      description: 'Creating waves of change',
      criteria: [
        'Complete 3 community projects',
        'Mentor new participants',
        'Present at local events'
      ]
    },
    {
      name: 'Beacon',
      icon: '🌟',
      color: 'text-yellow-500',
      description: 'Guiding others towards positive change',
      criteria: [
        'Complete 5 community projects',
        'Lead project teams',
        'Contribute to program development'
      ]
    },
    {
      name: 'Legacy',
      icon: '🌍',
      color: 'text-green-500',
      description: 'Building lasting community transformation',
      criteria: [
        'Complete 10 community projects',
        'Become a program ambassador',
        'Inspire systemic change'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Award Levels</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {levels.map((level, index) => (
          <motion.div
            key={level.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className={`text-6xl mb-4 text-center ${level.color}`}>{level.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-2">{level.name}</h3>
            <p className="text-gray-600 text-center mb-4">{level.description}</p>
            <h4 className="font-semibold mb-2">Criteria:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {level.criteria.map((criterion, i) => (
                <li key={i}>{criterion}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardLevelsPage;