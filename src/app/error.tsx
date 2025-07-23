'use client';

import React from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-orange-600 dark:text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Page Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This page encountered an error while loading. Please try again or return to the homepage.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            Retry
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Back to Homepage
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Error Details (Development)
            </summary>
            <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                <strong>Message:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
              <pre className="text-xs overflow-auto text-red-600 dark:text-red-400 max-h-48">
                {error.stack}
              </pre>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
