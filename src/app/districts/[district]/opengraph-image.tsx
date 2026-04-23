import { ImageResponse } from 'next/og';
import { getDistrict } from '@/data/districts';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return [];
}

export default function Image({ params }: { params: { district: string } }) {
  const district = getDistrict(params.district);
  const displayName = district?.displayName ?? params.district;
  const description = district?.description ?? 'Explore temples in this district of Himachal Pradesh.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          background: 'linear-gradient(160deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top branding */}
        <div style={{ position: 'absolute', top: 48, left: 64, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22 }}>🛕</span>
          <span style={{ color: '#93c5fd', fontSize: 18, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>
            Himachal Temples
          </span>
        </div>

        {/* Amber accent */}
        <div style={{ width: 50, height: 4, background: '#f59e0b', borderRadius: 2, marginBottom: 20 }} />

        <p style={{ color: '#fbbf24', fontSize: 18, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 16 }}>
          Himachal Pradesh
        </p>
        <h1 style={{ color: '#ffffff', fontSize: 72, fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
          {displayName}
        </h1>
        <p style={{ color: '#bfdbfe', fontSize: 24, marginTop: 20, maxWidth: 800, lineHeight: 1.4 }}>
          {description}
        </p>
      </div>
    ),
    size,
  );
}
