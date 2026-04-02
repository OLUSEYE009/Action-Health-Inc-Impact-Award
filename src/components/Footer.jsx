import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">AHI Impact Award</h3>
            <p className="text-gray-400 text-sm">
              Empowering youth to transform communities through impactful projects and structured recognition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/award-levels" className="text-gray-400 hover:text-primary transition-colors">Award Levels</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/impact-stories" className="text-gray-400 hover:text-primary transition-colors">Impact Stories</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-primary transition-colors">Toolkits</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Action Health Incorporated. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;