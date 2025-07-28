import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Ahmed Attafi - Software Developer & IoT Specialist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          fontSize: 60,
          fontWeight: 700,
          color: 'white',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #14b8a6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: 80,
            marginBottom: 20,
          }}
        >
          Ahmed Attafi
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
          }}
        >
          Software Developer & IoT Specialist
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#64748b',
            marginTop: 20,
          }}
        >
          Crafting digital experiences that inspire
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}