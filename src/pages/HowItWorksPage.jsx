import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Register',
      description: 'Create your account as a participant or facilitator.',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Submit Project',
      description: 'Develop and submit your community impact project idea.',
      icon: '💡'
    },
    {
      number: 3,
      title: 'Get Approval',
      description: 'Facilitators review and approve your project proposal.',
      icon: '✅'
    },
    {
      number: 4,
      title: 'Implement',
      description: 'Execute your project in your community.',
      icon: '🚀'
    },
    {
      number: 5,
      title: 'Report Impact',
      description: 'Document and report the outcomes of your project.',
      icon: '📊'
    },
    {
      number: 6,
      title: 'Earn Awards',
      description: 'Receive badges and recognition for your achievements.',
      icon: '🏆'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">How It Works</h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of youth making a difference in their communities.
            </p>
            <div className="space-x-4">
              <a href="/register" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block">
                Register Now
              </a>
              <a href="/about" className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;