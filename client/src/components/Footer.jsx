import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-blue-400">
              Deepasha Bisht
            </h3>
            <p className="text-gray-400 text-sm">
              Future Full-Stack Developer passionate about building modern web applications 
              and creating engaging social media content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Deepashaa24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/deepasha-bisht-73b62a338"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.codechef.com/users/deepasha_123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="CodeChef"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.257.004c-.37.002-.74.024-1.11.082C4.764.559.873 4.45.391 9.833c-.482 5.384 2.91 10.4 8.293 10.883 5.383.482 10.4-2.91 10.883-8.293.482-5.384-2.91-10.4-8.293-10.883-.37-.042-.741-.063-1.11-.062zm.131 2.05c.765-.012 1.528.095 2.276.324 2.232.686 4.021 2.475 4.707 4.707.686 2.232.391 4.646-1.067 6.487-1.458 1.84-3.706 2.767-6.032 2.646-2.326-.122-4.438-1.377-5.656-3.392-1.218-2.015-1.423-4.536-.622-6.697.801-2.161 2.57-3.93 4.73-4.731.724-.268 1.48-.396 2.245-.408zm-.073 2.065c-1.434.094-2.724.837-3.537 2.014-.813 1.177-1.06 2.683-.731 4.075.329 1.392 1.29 2.572 2.618 3.216 1.328.644 2.92.692 4.29.167 1.37-.525 2.435-1.69 2.88-3.13.445-1.44.228-3.02-.615-4.253-.843-1.233-2.195-1.996-3.63-2.09-.179-.014-.358-.015-.537-.008zm.097 2.047c.816-.033 1.63.247 2.235.784.605.537.943 1.296.948 2.091.005.795-.335 1.567-.948 2.104-.613.537-1.443.803-2.26.768-.817-.035-1.595-.37-2.157-.948-.562-.578-.874-1.368-.839-2.184.035-.817.37-1.595.948-2.157.578-.562 1.368-.874 2.184-.839z"/>
                </svg>
              </a>
              <a
                href="mailto:deepashabisht4@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              📧 deepashabisht4@gmail.com<br />
              📱 +91 9634952421<br />
              📍 Bara Sahib, Sirmour, HP
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Deepasha Bisht. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, Node.js, and MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
