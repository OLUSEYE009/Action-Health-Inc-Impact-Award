import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useImpact } from '../context/ImpactContext';
import { useNotifications } from '../hooks/useNotifications';
import useLocalStorage from '../hooks/useLocalStorage';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Progress from '../components/Progress';
import MultiStepForm from '../components/MultiStepForm';
import EmptyState from '../components/EmptyState';
import { Trophy, Plus, FileText, Download, Award, TrendingUp, BookOpen } from 'lucide-react';

const ParticipantPortal = () => {
  const { user } = useAuth();
  const { getParticipantStats } = useImpact();
  const { success, error } = useNotifications();
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const userProjects = projects.filter(p => p.participantId === user?.email);
  const stats = getParticipantStats(user?.email);

  const levelConfigs = {
    Newcomer: { label: 'Newcomer', minProjects: 0, color: 'gray', icon: '👤' },
    Spark: { label: 'Spark', minProjects: 1, color: 'orange', icon: '🔥' },
    Ripple: { label: 'Ripple', minProjects: 3, color: 'blue', icon: '🌊' },
    Beacon: { label: 'Beacon', minProjects: 5, color: 'yellow', icon: '🌟' },
    Legacy: { label: 'Legacy', minProjects: 10, color: 'green', icon: '🌍' },
  };

  const projectSteps = [
    {
      title: 'Project Details',
      description: 'Tell us about your project',
      icon: '📋',
      fields: [
        { name: 'title', label: 'Project Title', type: 'text', required: true, placeholder: 'E.g., Community Garden Initiative' },
        { name: 'category', label: 'Category', type: 'select', required: true, options: ['Environment', 'Education', 'Health', 'Community'] },
        { name: 'description', label: 'Description', type: 'textarea', required: true, placeholder: 'Describe your project...', hint: 'Be detailed about your project goals and activities' },
      ]
    },
    {
      title: 'Impact Metrics',
      description: 'How will you measure success?',
      icon: '📊',
      fields: [
        { name: 'peopleImpacted', label: 'People Impacted', type: 'number', required: true, placeholder: 'Expected number' },
        { name: 'duration', label: 'Project Duration (months)', type: 'number', required: true },
        { name: 'location', label: 'Location', type: 'text', required: true, placeholder: 'Where is your project?' },
      ]
    },
    {
      title: 'Evidence & Resources',
      description: 'Share proof and resources',
      icon: '📸',
      fields: [
        { name: 'mediaLink', label: 'Photo/Video Link', type: 'url', placeholder: 'https://...' },
        { name: 'evidence', label: 'Evidence Description', type: 'textarea', placeholder: 'How will you document impact?' },
      ]
    },
    {
      title: 'Review',
      description: 'Confirm your submission',
      icon: '✅',
      fields: []
    },
  ];

  const handleFormSubmit = (formData) => {
    const project = {
      ...formData,
      id: Date.now(),
      participantId: user?.email,
      status: 'pending',
      impactScore: 0,
      verificationStatus: 'pending',
      submittedAt: new Date().toISOString()
    };
    setProjects([...projects, project]);
    success('Project submitted successfully! Awaiting facilitator review.');
    setShowForm(false);
  };

  const progressToNextLevel = stats.level !== 'Legacy' 
    ? Object.values(levelConfigs).find(l => l.label === stats.level)?.minProjects 
    : stats.approvedProjects;

  return (
    <div className="bg-white dark:bg-dark-bg min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your impact and progress toward your next award level.</p>
        </div>

        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card glass className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Level</p>
                  <h2 className="text-4xl font-bold mb-4">{stats.level}</h2>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      {stats.approvedProjects} Approved Projects
                    </Badge>
                    <Badge variant="accent">
                      {stats.xp} XP
                    </Badge>
                  </div>
                </div>
                <div className="text-7xl">
                  {levelConfigs[stats.level]?.icon}
                </div>
              </div>

              {/* Progress to Next Level */}
              {stats.level !== 'Legacy' && (
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium mb-3">Progress to Next Level</p>
                  <Progress
                    value={stats.approvedProjects}
                    max={progressToNextLevel}
                    label={`${stats.approvedProjects} / ${progressToNextLevel} projects`}
                    variant="primary"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-gray-200 dark:border-gray-700">
          {['overview', 'projects', 'journal', 'certificates'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FileText, label: 'Total Projects', value: userProjects.length },
              { icon: Trophy, label: 'Approved', value: stats.approvedProjects },
              { icon: TrendingUp, label: 'Impact Score', value: userProjects.reduce((acc, p) => acc + (p.impactScore || 0), 0) },
              { icon: Award, label: 'XP Earned', value: stats.xp },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card hover>
                    <CardContent className="p-6">
                      <Icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Projects Tab & Form */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {!showForm ? (
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowForm(true)}
                  className="gap-2"
                >
                  <Plus className="w-5 h-5" />
                  New Project
                </Button>
              </div>
            ) : (
              <MultiStepForm
                title="Submit New Project"
                steps={projectSteps}
                onSubmit={handleFormSubmit}
              />
            )}

            {!showForm && (userProjects.length === 0 ? (
              <EmptyState
                icon={FileText}
                title="No projects yet"
                description="Start making an impact by submitting your first project"
                action={() => setShowForm(true)}
                actionLabel="Submit Project"
              />
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Your Projects</h3>
                {userProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card hover>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold">{project.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.category}</p>
                          </div>
                          <Badge
                            variant={
                              project.status === 'approved' ? 'success' :
                              project.status === 'rejected' ? 'error' : 'warning'
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Journal Tab */}
        {activeTab === 'journal' && (
          <div>
            <h3 className="text-xl font-bold mb-6">Impact Journal</h3>
            {userProjects.length === 0 ? (
              <EmptyState
                icon={BookOpen}
                title="No journal entries"
                description="Submit projects to start building your impact journal"
              />
            ) : (
              <div className="space-y-4">
                {userProjects.slice().reverse().map((project) => (
                  <Card key={project.id} glass>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{project.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(project.submittedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div>
            <h3 className="text-xl font-bold mb-6">Certificates</h3>
            <Card className="text-center p-12">
              <CardContent>
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Unlock certificates as you progress through award levels
                </p>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Certificate (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantPortal;