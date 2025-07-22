export default function TestPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Test Page</h1>
        <p className="text-muted-foreground mb-8">
          This is a test to ensure the basic setup is working.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold">✅ Next.js 14</h2>
            <p>Framework is running</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold">✅ Tailwind CSS</h2>
            <p>Styling is working</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold">✅ TypeScript</h2>
            <p>Type checking is active</p>
          </div>
        </div>
      </div>
    </div>
  )
}
