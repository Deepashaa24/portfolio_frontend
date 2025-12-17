import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section - Modern dark background with large centered text */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in tracking-tight">
            Deepasha Bisht
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
            Future Full-Stack Developer | Social Media Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Proactive BCA student seeking a Web Development Internship to apply technical skills and creative insight in real-world projects. 
            Passionate about combining web development with social media content creation to help brands engage and grow.
          </p>
          
          {/* Call-to-action button with hover effect */}
          <a
            href="https://github.com/Deepashaa24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            View My Work
          </a>
          
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/Deepashaa24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/deepasha-bisht-73b62a338"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.codechef.com/users/deepasha_123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="CodeChef"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.257.004c-.37.002-.74.024-1.11.082C4.764.559.873 4.45.391 9.833c-.482 5.384 2.91 10.4 8.293 10.883 5.383.482 10.4-2.91 10.883-8.293.482-5.384-2.91-10.4-8.293-10.883-.37-.042-.741-.063-1.11-.062zm.131 2.05c.765-.012 1.528.095 2.276.324 2.232.686 4.021 2.475 4.707 4.707.686 2.232.391 4.646-1.067 6.487-1.458 1.84-3.706 2.767-6.032 2.646-2.326-.122-4.438-1.377-5.656-3.392-1.218-2.015-1.423-4.536-.622-6.697.801-2.161 2.57-3.93 4.73-4.731.724-.268 1.48-.396 2.245-.408zm-.073 2.065c-1.434.094-2.724.837-3.537 2.014-.813 1.177-1.06 2.683-.731 4.075.329 1.392 1.29 2.572 2.618 3.216 1.328.644 2.92.692 4.29.167 1.37-.525 2.435-1.69 2.88-3.13.445-1.44.228-3.02-.615-4.253-.843-1.233-2.195-1.996-3.63-2.09-.179-.014-.358-.015-.537-.008zm.097 2.047c.816-.033 1.63.247 2.235.784.605.537.943 1.296.948 2.091.005.795-.335 1.567-.948 2.104-.613.537-1.443.803-2.26.768-.817-.035-1.595-.37-2.157-.948-.562-.578-.874-1.368-.839-2.184.035-.817.37-1.595.948-2.157.578-.562 1.368-.874 2.184-.839z"/>
              </svg>
            </a>
            <a
              href="mailto:deepashabisht4@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="Email"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
