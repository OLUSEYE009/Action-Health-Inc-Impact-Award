import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AHI Impact Award</h3>
            <p>Empowering youth to transform communities through impactful projects.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/award-levels" className="hover:text-primary">Award Levels</a></li>
              <li><a href="/how-it-works" className="hover:text-primary">How It Works</a></li>
              <li><a href="/impact-stories" className="hover:text-primary">Impact Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/resources" className="hover:text-primary">Toolkits</a></li>
              <li><a href="/events" className="hover:text-primary">Events</a></li>
              <li><a href="/get-involved" className="hover:text-primary">Get Involved</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2026 Action Health Inc.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;