'use client';

import React from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Application Error
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're experiencing technical difficulties. Our team has been notified and is working to resolve this issue.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Go to Homepage
              </button>
              <a
                href="mailto:attafiahmed.dev@gmail.com"
                className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact Support
              </a>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  Error Details (Development)
                </summary>
                <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Error:</strong> {error.message}
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
      </body>
    </html>
  );
}
