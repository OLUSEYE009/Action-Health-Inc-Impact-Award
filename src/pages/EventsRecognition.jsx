import React from 'react';

const EventsRecognition = () => {
  const upcomingEvents = [
    {
      title: 'Youth Impact Workshop',
      date: 'April 15, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Center, Downtown',
      description: 'Learn project planning and community engagement skills.'
    },
    {
      title: 'Award Ceremony',
      date: 'May 20, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'City Hall Auditorium',
      description: 'Celebrate this year\'s impact award recipients.'
    }
  ];

  const pastEvents = [
    {
      title: 'Environmental Awareness Day',
      date: 'March 10, 2026',
      description: 'Over 50 youth participated in clean-up activities.'
    },
    {
      title: 'Digital Skills Training',
      date: 'February 28, 2026',
      description: 'Introduced coding basics to 30 participants.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Events & Recognition</h1>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-primary font-medium mb-1">{event.date}</p>
              <p className="text-gray-600 mb-1">{event.time}</p>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Past Events</h2>
        <div className="space-y-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-primary">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsRecognition;