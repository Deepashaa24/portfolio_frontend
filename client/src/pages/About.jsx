import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4 text-center tracking-tight">
          About Me
        </h1>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
          Hi! I'm Deepasha Bisht, a proactive BCA student from Eternal University seeking a Web Development Internship to apply my technical skills and creative insight in real-world projects.
        </p>
        
        {/* Resume Download Button */}
        <div className="text-center mb-12">
          <a
            href="/resume.pdf"
            download="Deepasha_Bisht_Resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Download Resume
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            <h2 className="font-heading text-3xl font-bold text-white">Education</h2>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-blue-300">Eternal University</h3>
                <p className="text-gray-400 italic text-lg">Bachelor of Computer Applications</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Relevant Coursework:</h4>
              <p className="text-gray-300">Web Development, JavaScript, Data Structures, DBMS, Python and React</p>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Highlights:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Built multiple web projects as part of coursework and personal growth
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Currently learning DOM manipulation + building e-commerce and visualization apps with HTML, CSS, JS
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            <h2 className="font-heading text-3xl font-bold text-white">Skills & Technologies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
                <h3 className="font-semibold text-xl text-blue-300">Frontend Languages</h3>
              </div>
              <p className="text-gray-300">HTML5, CSS3, JavaScript, Python, React.js</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-green-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
                </svg>
                <h3 className="font-semibold text-xl text-green-300">Backend & Databases</h3>
              </div>
              <p className="text-gray-300">Node.js, Express, MongoDB, MySQL</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
                <h3 className="font-semibold text-xl text-purple-300">Frameworks/Libraries</h3>
              </div>
              <p className="text-gray-300">React.js, Node.js, Tailwind CSS, Bootstrap</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-yellow-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                </svg>
                <h3 className="font-semibold text-xl text-yellow-300">Tools & Version Control</h3>
              </div>
              <p className="text-gray-300">Git, GitHub, GitLab, VS Code, npm</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-pink-700 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A11.198 11.198 0 0012 2.25a11.196 11.196 0 00-3.256.261 6.046 6.046 0 00-6.51 2.9 5.985 5.985 0 00-.516 4.91c-.003.113-.004.227-.004.341v5.356c0 .113.001.227.004.34a5.985 5.985 0 00.516 4.91 6.046 6.046 0 006.51 2.9 11.196 11.196 0 003.256.261 11.198 11.198 0 003.256-.261 6.046 6.046 0 006.51-2.9 5.985 5.985 0 00.516-4.91c.003-.113.004-.227.004-.34V10.16c0-.113-.001-.227-.004-.34zM12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zm0-11.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/>
                </svg>
                <h3 className="font-semibold text-xl text-pink-300">Additional Skills</h3>
              </div>
              <p className="text-gray-300">Gen AI fundamentals, Social Media Content Creation & Branding</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-indigo-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
                <h3 className="font-semibold text-xl text-indigo-300">Languages</h3>
              </div>
              <p className="text-gray-300">English, Hindi</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
            </svg>
            <h2 className="font-heading text-3xl font-bold text-white">Certificates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Prompt Engineering for ChatGPT</h3>
                  <p className="text-sm text-gray-400 mt-1">Advanced AI prompting techniques</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Introduction to Git and GitHub</h3>
                  <p className="text-sm text-gray-400 mt-1">Version control fundamentals</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Introducing Generative AI with AWS</h3>
                  <p className="text-sm text-gray-400 mt-1">Cloud-based AI solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Version Control</h3>
                  <p className="text-sm text-gray-400 mt-1">Git workflow and collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
