"use client"
import { useState, useEffect } from 'react';

import React from 'react'

const page = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
        setError(true); 
      }, 5000);
    
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <svg
              className="animate-spin h-10 w-10 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Error!</h2>
            <p className="text-gray-700">Something went wrong. Please try again later.</p>
          </div>
        ) : null}
      </div>
    );
}
export default page
