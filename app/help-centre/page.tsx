import React from 'react';
import "@fontsource/montserrat/900.css";

export default function HelpCentre() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-25">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8">
        {/* Information Section */}
        <div className="p-8 bg-gradient-to-br bg-green-700 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Report and Resolution Center</h1>

          <p className="mb-6 text-gray-200">
            At iPick, we prioritize your satisfaction and safety. If you have any concerns,
            feedback, or need assistance, we're here to help.
          </p>

          <div className="mb-6">
            <p className="font-semibold mb-4">Contact Us:</p>
            <p className="text-lg font-bold">(+63) 967-948-0032</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Your Feedback Matters:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Safety Concerns
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Driver Feedback
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.344 5.657a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
                </svg>
                Technical Issues
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                General Feedback
              </li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Driver's Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">I am a *</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                >
                  <option>Rider</option>
                  <option>Driver</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction Date and Time *</label>
              <input
                type="datetime-local"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ride Status *</label>
              <div className="flex gap-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  Complete
                </label>
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  Cancelled
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Issue Type *</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
              >
                <option>Navigational Problems</option>
                <option>Driver Behavior</option>
                <option>Payment Issues</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Comment or Message *</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-green-700 text-white font-bold rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
