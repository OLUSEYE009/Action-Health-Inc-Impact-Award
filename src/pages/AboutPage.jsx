import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About AHI Impact Award</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          To empower youth to create positive change in their communities through innovative projects and initiatives.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-6">
          A world where every young person has the opportunity and support to make a meaningful impact.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Empowerment: Giving youth the tools and confidence to lead change</li>
          <li>Innovation: Encouraging creative solutions to community challenges</li>
          <li>Collaboration: Building partnerships across communities</li>
          <li>Sustainability: Creating lasting positive impact</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Connection to Action Health Inc</h2>
        <p className="text-lg text-gray-700 mb-6">
          The AHI Impact Award builds on Action Health Inc's legacy of community health and wellness initiatives.
          By focusing on youth-led projects, we aim to foster the next generation of community leaders and health advocates.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Dr. Jane Smith</h3>
            <p className="text-gray-600">Program Director</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Mark Johnson</h3>
            <p className="text-gray-600">Youth Engagement Coordinator</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Sarah Lee</h3>
            <p className="text-gray-600">Community Outreach Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;