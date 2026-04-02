import React from 'react';

const Resources = () => {
  const toolkits = [
    {
      title: 'Project Planning Toolkit',
      description: 'Step-by-step guide to planning impactful community projects.',
      downloadLink: '#'
    },
    {
      title: 'Impact Measurement Guide',
      description: 'Learn how to measure and document your project\'s impact.',
      downloadLink: '#'
    },
    {
      title: 'Community Engagement Handbook',
      description: 'Best practices for engaging with community stakeholders.',
      downloadLink: '#'
    }
  ];

  const guides = [
    {
      title: 'Getting Started as a Youth Leader',
      content: 'Tips for new participants on leadership and project management.'
    },
    {
      title: 'Sustainable Project Ideas',
      content: 'Ideas for projects that create lasting positive change.'
    },
    {
      title: 'Mentoring Best Practices',
      content: 'How to effectively mentor fellow youth participants.'
    }
  ];

  const faqs = [
    {
      question: 'How do I submit a project?',
      answer: 'Log in to your participant portal and use the project submission form.'
    },
    {
      question: 'What types of projects are eligible?',
      answer: 'Any project that positively impacts your community is eligible.'
    },
    {
      question: 'How long does approval take?',
      answer: 'Projects are typically reviewed within 1-2 weeks.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>

      {/* Toolkits */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Toolkits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {toolkits.map((toolkit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{toolkit.title}</h3>
              <p className="text-gray-600 mb-4">{toolkit.description}</p>
              <a
                href={toolkit.downloadLink}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Guides</h2>
        <div className="space-y-6">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;