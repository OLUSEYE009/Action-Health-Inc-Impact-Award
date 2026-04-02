import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ImpactContext = createContext();

export const useImpact = () => {
  const context = useContext(ImpactContext);
  if (!context) {
    throw new Error('useImpact must be used within ImpactProvider');
  }
  return context;
};

export const ImpactProvider = ({ children }) => {
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [participants, setParticipants] = useLocalStorage('participants', []);
  const [skills, setSkills] = useLocalStorage('skills', []);
  const [challenges, setChallenges] = useLocalStorage('challenges', []);

  const getParticipantLevel = (projectCount) => {
    if (projectCount >= 10) return { level: 'Legacy', xp: 1000 };
    if (projectCount >= 5) return { level: 'Beacon', xp: 500 };
    if (projectCount >= 3) return { level: 'Ripple', xp: 250 };
    if (projectCount >= 1) return { level: 'Spark', xp: 100 };
    return { level: 'Newcomer', xp: 0 };
  };

  const getParticipantStats = (email) => {
    const userProjects = projects.filter(p => p.participantId === email);
    const approvedProjects = userProjects.filter(p => p.status === 'approved');
    
    return {
      totalProjects: userProjects.length,
      approvedProjects: approvedProjects.length,
      pendingProjects: userProjects.filter(p => p.status === 'pending').length,
      rejectedProjects: userProjects.filter(p => p.status === 'rejected').length,
      ...getParticipantLevel(approvedProjects.length),
    };
  };

  const getImpactMetrics = () => {
    const approvedProjects = projects.filter(p => p.status === 'approved');
    const totalImpactScore = approvedProjects.reduce((acc, p) => acc + (p.impactScore || 0), 0);
    
    return {
      totalParticipants: participants.length,
      totalProjects: approvedProjects.length,
      totalImpactScore,
      activeParticipants: participants.filter(p => 
        projects.some(proj => proj.participantId === p.email && proj.status === 'approved')
      ).length,
    };
  };

  const addSkill = (participantEmail, skill) => {
    const existingSkills = skills.filter(s => s.participantEmail === participantEmail);
    const newSkill = {
      id: Date.now(),
      participantEmail,
      skill,
      addedAt: new Date().toISOString(),
    };
    setSkills([...existingSkills, newSkill]);
  };

  return (
    <ImpactContext.Provider value={{
      projects,
      setProjects,
      participants,
      setParticipants,
      skills,
      setSkills,
      challenges,
      setChallenges,
      getParticipantLevel,
      getParticipantStats,
      getImpactMetrics,
      addSkill,
    }}>
      {children}
    </ImpactContext.Provider>
  );
};
