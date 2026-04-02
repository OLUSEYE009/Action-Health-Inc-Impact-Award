import React from 'react';

const GetInvolved = () => {
  const opportunities = [
    {
      title: 'Volunteer as a Mentor',
      description: 'Share your experience and guide new participants through their first projects.',
      type: 'volunteer'
    },
    {
      title: 'Partner with Local Organizations',
      description: 'Collaborate with community organizations to amplify project impact.',
      type: 'partner'
    },
    {
      title: 'Support Youth Initiatives',
      description: 'Donate resources, funding, or expertise to support youth-led projects.',
      type: 'donate'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Get Involved</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {opportunities.map((opp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">{opp.title}</h3>
            <p className="text-gray-600 mb-6">{opp.description}</p>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Get Involved?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Make a Difference</h3>
            <p className="text-gray-600">Your involvement can create lasting positive change in communities.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Build Connections</h3>
            <p className="text-gray-600">Connect with like-minded individuals passionate about youth empowerment.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Develop Skills</h3>
            <p className="text-gray-600">Gain valuable experience in mentoring, project management, and leadership.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Create Impact</h3>
            <p className="text-gray-600">Help youth transform their communities and build a better future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;