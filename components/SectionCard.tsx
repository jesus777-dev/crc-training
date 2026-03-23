'use client';

import { Section } from '@/lib/lms-data';

interface SectionCardProps {
  section: Section;
  moduleCount: number;
  onClick: () => void;
}

export default function SectionCard({ section, moduleCount, onClick }: SectionCardProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#1e2022',
        border: `2px solid ${section.color}`,
        borderRadius: '0.5rem',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#334155';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#1e2022';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: section.color,
          marginBottom: '0.5rem'
        }}>
          {section.title}
        </h3>
        <p style={{
          color: '#9BA1A6',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}>
          {section.description}
        </p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: `1px solid ${section.color}40`
      }}>
        <span style={{
          background: section.color,
          color: '#0F1419',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>
          {moduleCount} modules
        </span>
        <span style={{ color: '#9BA1A6' }}>→</span>
      </div>
    </button>
  );
}
