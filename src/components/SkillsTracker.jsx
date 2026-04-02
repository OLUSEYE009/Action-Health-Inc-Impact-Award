import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from './Card';
import Badge from './Badge';
import Progress from './Progress';

const SkillsTracker = ({ skills = [] }) => {
  const commonSkills = [
    { name: 'Leadership', category: 'soft' },
    { name: 'Project Management', category: 'soft' },
    { name: 'Communication', category: 'soft' },
    { name: 'Problem Solving', category: 'soft' },
    { name: 'Community Engagement', category: 'soft' },
    { name: 'Data Analysis', category: 'technical' },
    { name: 'Budget Management', category: 'technical' },
    { name: 'Public Speaking', category: 'soft' },
  ];

  const skillStats = commonSkills.map(skill => ({
    ...skill,
    level: Math.floor(Math.random() * 100), // Mock data
    gained: Math.random() < 0.5,
  }));

  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-bold">Skills Development</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Track skills you're developing through your projects</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Soft Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Soft Skills</Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {skillStats.filter(s => s.category === 'soft' && s.level > 0).length} developed
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillStats.filter(s => s.category === 'soft').map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-gray-50 dark:bg-dark-card rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  {skill.gained && (
                    <Badge variant="success" className="text-xs">New</Badge>
                  )}
                </div>
                <Progress value={skill.level} max={100} variant="secondary" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="accent">Technical Skills</Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {skillStats.filter(s => s.category === 'technical' && s.level > 0).length} developed
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillStats.filter(s => s.category === 'technical').map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-gray-50 dark:bg-dark-card rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  {skill.gained && (
                    <Badge variant="success" className="text-xs">New</Badge>
                  )}
                </div>
                <Progress value={skill.level} max={100} variant="accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsTracker;
