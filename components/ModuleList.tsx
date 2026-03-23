'use client';

import { Section } from '@/lib/lms-data';

interface ModuleListProps {
  section: Section;
  progress: Record<string, boolean>;
  onSelectModule: (moduleId: string) => void;
  onToggleComplete: (moduleId: string) => void;
}

export default function ModuleList({
  section,
  progress,
  onSelectModule,
  onToggleComplete
}: ModuleListProps) {
  const sectionProgress = section.modules.filter(m => progress[m.id]).length;

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: section.color,
          marginBottom: '0.5rem'
        }}>
          {section.title}
        </h2>
        <p style={{ color: '#9BA1A6', marginBottom: '1rem' }}>
          {section.description}
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '200px',
            height: '8px',
            background: '#334155',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(sectionProgress / section.modules.length) * 100}%`,
              height: '100%',
              background: section.color,
              transition: 'width 0.3s ease'
            }} />
          </div>
          <span style={{ color: '#9BA1A6', fontSize: '0.875rem' }}>
            {sectionProgress}/{section.modules.length}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {section.modules.map(module => (
          <div
            key={module.id}
            style={{
              background: '#1e2022',
              border: '1px solid #334155',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#334155';
              (e.currentTarget as HTMLElement).style.borderColor = section.color;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#1e2022';
              (e.currentTarget as HTMLElement).style.borderColor = '#334155';
            }}
          >
            <div
              onClick={() => onSelectModule(module.id)}
              style={{ flex: 1 }}
            >
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#ECEDEE',
                marginBottom: '0.25rem'
              }}>
                {module.title}
              </h3>
              <p style={{
                color: '#9BA1A6',
                fontSize: '0.875rem'
              }}>
                {module.steps.length} steps
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(module.id);
              }}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: `2px solid ${section.color}`,
                background: progress[module.id] ? section.color : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              {progress[module.id] && (
                <span style={{ color: '#0F1419', fontWeight: 'bold' }}>✓</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
