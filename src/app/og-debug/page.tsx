'use client'

export default function OpenGraphDebug() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          OpenGraph Debug
        </h1>
        
        <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Current Meta Tags</h2>
          <div className="space-y-2 text-sm font-mono">
            <p><span className="text-blue-400">og:title:</span> Ahmed Attafi - Full Stack Developer & Software Engineer</p>
            <p><span className="text-blue-400">og:description:</span> Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.</p>
            <p><span className="text-blue-400">og:image:</span> https://portfolio-ltsckqvdq-ahmed-attafis-projects.vercel.app/og-image.png</p>
            <p><span className="text-blue-400">og:url:</span> https://portfolio-ltsckqvdq-ahmed-attafis-projects.vercel.app</p>
            <p><span className="text-blue-400">og:type:</span> website</p>
            <p><span className="text-blue-400">twitter:card:</span> summary_large_image</p>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test Your OpenGraph</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Facebook Debugger</h3>
              <a 
                href="https://developers.facebook.com/tools/debug/?q=https://portfolio-ltsckqvdq-ahmed-attafis-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Test on Facebook Sharing Debugger
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Twitter Card Validator</h3>
              <a 
                href="https://cards-dev.twitter.com/validator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Test on Twitter Card Validator
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">LinkedIn Post Inspector</h3>
              <a 
                href="https://www.linkedin.com/post-inspector/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Test on LinkedIn Post Inspector
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Image Preview</h2>
          <img 
            src="https://portfolio-ltsckqvdq-ahmed-attafis-projects.vercel.app/og-image.png" 
            alt="OpenGraph Preview" 
            className="w-full max-w-2xl rounded-lg shadow-lg"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIGZpbGw9IiMxZTI5M2IiLz48dGV4dCB4PSI2MDAiIHk9IjMxNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y4ZmFmYyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQ4Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+'
            }}
          />
        </div>
      </div>
    </div>
  )
}
