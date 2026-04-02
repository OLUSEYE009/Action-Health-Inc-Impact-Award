import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const LandingPage = () => {
  const [participants] = useLocalStorage('participants', []);
  const [projects] = useLocalStorage('projects', []);
  const [communities] = useLocalStorage('communities', []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Empowering Youth, Transforming Communities</h1>
          <p className="text-xl mb-8">Join the AHI Impact Award and make a difference in your community through impactful projects.</p>
          <div className="space-x-4">
            <Link to="/register" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">Register</Link>
            <Link to="/login" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Login</Link>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">{participants.length}</h3>
              <p className="text-gray-600">Participants</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">{projects.length}</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">{communities.length}</h3>
              <p className="text-gray-600">Communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Youth Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Demo cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Garden Project</h3>
              <p className="text-gray-600 mb-4">A group of youth transformed an empty lot into a thriving community garden, providing fresh produce to local families.</p>
              <p className="text-sm text-primary">By Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Digital Literacy Workshop</h3>
              <p className="text-gray-600 mb-4">Teaching seniors how to use technology to stay connected with their loved ones.</p>
              <p className="text-sm text-primary">By Michael Chen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Environmental Cleanup</h3>
              <p className="text-gray-600 mb-4">Organizing beach cleanups and raising awareness about plastic pollution.</p>
              <p className="text-sm text-primary">By Emma Rodriguez</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;