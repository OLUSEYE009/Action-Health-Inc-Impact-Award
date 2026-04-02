import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Leaderboard = () => {
  const [projects] = useLocalStorage('projects', []);
  const [participants] = useLocalStorage('participants', []);

  // Calculate leaderboard based on approved projects per participant
  const leaderboard = participants.map(participant => {
    const userProjects = projects.filter(p => p.participantId === participant.email && p.status === 'approved');
    return {
      ...participant,
      projectCount: userProjects.length,
      level: getLevel(userProjects.length)
    };
  }).sort((a, b) => b.projectCount - a.projectCount);

  function getLevel(projectCount) {
    if (projectCount >= 10) return 'Legacy';
    if (projectCount >= 5) return 'Beacon';
    if (projectCount >= 3) return 'Ripple';
    if (projectCount >= 1) return 'Spark';
    return 'Newcomer';
  }

  const levelColors = {
    Legacy: 'text-green-500',
    Beacon: 'text-yellow-500',
    Ripple: 'text-blue-500',
    Spark: 'text-orange-500',
    Newcomer: 'text-gray-500'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Leaderboard</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-white p-4">
            <h2 className="text-xl font-semibold">Top Contributors</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {leaderboard.map((user, index) => (
              <div key={user.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{user.projectCount} Projects</div>
                  <div className={`text-sm ${levelColors[user.level]}`}>{user.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {leaderboard.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No participants yet. Be the first to join!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;