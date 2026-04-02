import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AwardPage = () => {
  const { level } = useParams();

  const awardDetails = {
    spark: {
      name: 'Spark',
      emoji: '🔥',
      color: 'text-orange-500',
      description: 'You\'ve ignited the flame of change! Your first project has made a real impact in your community.',
      message: 'Congratulations on earning your Spark badge. This is just the beginning of your journey of community transformation.'
    },
    ripple: {
      name: 'Ripple',
      emoji: '🌊',
      color: 'text-blue-500',
      description: 'Your actions are creating waves of positive change that extend far beyond your initial efforts.',
      message: 'Amazing work! Your Ripple badge represents the growing influence you\'re having on your community.'
    },
    beacon: {
      name: 'Beacon',
      emoji: '🌟',
      color: 'text-yellow-500',
      description: 'You\'re now a guiding light for others, showing the way toward meaningful community impact.',
      message: 'Outstanding achievement! Your Beacon badge illuminates the path for fellow youth leaders.'
    },
    legacy: {
      name: 'Legacy',
      emoji: '🌍',
      color: 'text-green-500',
      description: 'Your sustained commitment has created lasting change that will benefit generations to come.',
      message: 'Incredible accomplishment! Your Legacy badge represents the enduring impact you\'ve created.'
    }
  };

  const award = awardDetails[level.toLowerCase()];

  if (!award) {
    return <div className="container mx-auto px-4 py-8">Award level not found.</div>;
  }

  const shareMessage = `I just earned my ${award.name} badge in the AHI Impact Award! ${award.description}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <span className={`text-8xl ${award.color}`}>{award.emoji}</span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Congratulations!
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className={`text-3xl font-semibold mb-6 ${award.color}`}
        >
          {award.name} Award
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg text-gray-700 mb-6"
        >
          {award.message}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-gray-600 mb-8"
        >
          {award.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">Share Your Achievement</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`, '_blank')}
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
            >
              Twitter
            </button>
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Facebook
            </button>
            <button
              onClick={() => navigator.share?.({ title: `AHI ${award.name} Award`, text: shareMessage, url: window.location.href })}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Share
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/participant"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Continue Your Journey
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AwardPage;