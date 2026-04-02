import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Globe, Sparkles, TrendingUp, Award } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Card, CardContent } from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';

const LandingPage = () => {
  const [participants] = useLocalStorage('participants', []);
  const [projects] = useLocalStorage('projects', []);
  const [communities] = useLocalStorage('communities', []);
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    'Youth-led projects can create lasting community change',
    'Recognition drives engagement and motivation',
    'Structured progression celebrates achievements',
    'Community impact transforms lives',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Participants', value: participants.length, icon: Users },
    { label: 'Projects Submitted', value: projects.length, icon: Zap },
    { label: 'Communities Impacted', value: communities.length || 0, icon: Globe },
  ];

  const stories = [
    {
      title: 'Community Garden Project',
      description: 'Youth transformed an empty lot into a thriving community garden, providing fresh produce to local families.',
      author: 'Sarah Johnson',
      category: 'environment',
    },
    {
      title: 'Digital Literacy Workshop',
      description: 'Teaching seniors how to use technology to stay connected with their loved ones in the community.',
      author: 'Michael Chen',
      category: 'education',
    },
    {
      title: 'Environmental Cleanup Initiative',
      description: 'Youth-led beach cleanups and awareness campaigns tackling plastic pollution.',
      author: 'Emma Rodriguez',
      category: 'environment',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center">
              <Badge variant="secondary" className="gap-2">
                <Sparkles className="w-3 h-3" />
                Welcome to AHI Impact Award
              </Badge>
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Empowering Youth,<br />Transforming Communities
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join a structured program that recognizes, celebrates, and scales youth-led community impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/register">
                <Button variant="primary" size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="gap-2">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Rotating Fact */}
            <motion.div
              variants={itemVariants}
              className="bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-lg p-6 backdrop-blur-sm"
            >
              <motion.p
                key={currentFact}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg font-medium text-primary dark:text-secondary"
              >
                💡 {facts[currentFact]}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card glass hover className="h-full">
                    <CardContent className="flex items-center gap-4 py-8">
                      <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Join AHI Impact Award?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive platform for recognizing and scaling youth impact
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Award,
                title: 'Structured Progression',
                description: 'Spark → Ripple → Beacon → Legacy. Clear pathways to recognition.',
              },
              {
                icon: TrendingUp,
                title: 'Impact Measurement',
                description: 'Track and document the real-world impact of your projects.',
              },
              {
                icon: Users,
                title: 'Community Recognition',
                description: 'Showcase your achievements and inspire others in your community.',
              },
              {
                icon: Zap,
                title: 'Skill Development',
                description: 'Gain practical skills in project management and leadership.',
              },
              {
                icon: Globe,
                title: 'Scale Your Impact',
                description: 'Collaborate and expand your projects across communities.',
              },
              {
                icon: Sparkles,
                title: 'Exclusive Benefits',
                description: 'Unlock certificates, badges, and special opportunities.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Impact Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how young leaders are making a difference
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stories.map((story, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card hover glass className="h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <Badge variant="secondary" className="mb-3">
                      {story.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {story.description}
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-primary font-medium">— {story.author}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of young leaders transforming their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="primary" size="lg" className="gap-2">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/award-levels">
                <Button variant="outline" size="lg">
                  Explore Award Levels
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;