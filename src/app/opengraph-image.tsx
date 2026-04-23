import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Himachal Temples — Sacred temples across Himachal Pradesh';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Amber accent bar */}
        <div style={{ width: 60, height: 4, background: '#f59e0b', borderRadius: 2, marginBottom: 32 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: 'rgba(245,158,11,0.2)',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
            }}
          >
            🛕
          </div>
          <span style={{ color: '#93c5fd', fontSize: 20, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>
            Himachal Temples
          </span>
        </div>

        <h1 style={{ color: '#ffffff', fontSize: 64, fontWeight: 800, lineHeight: 1.1, margin: 0, maxWidth: 820 }}>
          Sacred Temples of Himachal Pradesh
        </h1>

        <p style={{ color: '#bfdbfe', fontSize: 26, marginTop: 24, maxWidth: 700 }}>
          Discover temples across all 12 districts of the Himalayan state.
        </p>

        <div style={{ display: 'flex', gap: 32, marginTop: 48 }}>
          {[['12', 'Districts'], ['60+', 'Temples'], ['2,000+', 'Years of Heritage']].map(([val, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#ffffff', fontSize: 32, fontWeight: 700 }}>{val}</span>
              <span style={{ color: '#93c5fd', fontSize: 16, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
