import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <p className="text-lg text-gray-700 mb-4">
          Feel free to reach out via phone, email, or connect with me on LinkedIn and GitHub.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">Phone:</span>
            <span className="text-gray-600">9949970880</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">Email:</span>
            <a href="mailto:challaarunkumar007@gmail.com" className="text-blue-500 hover:underline">
              challaarunkumar007@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/arunkumarchalla/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              linkedin.com/in/arunkumarchalla
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">GitHub:</span>
            <a href="https://github.com/Arun6408" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              github.com/Arun6408
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
