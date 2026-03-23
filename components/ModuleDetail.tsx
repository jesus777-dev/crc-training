'use client';

import { useState } from 'react';
import { Module } from '@/lib/lms-data';

interface ModuleDetailProps {
  module: Module;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onBack: () => void;
}

export default function ModuleDetail({
  module,
  isCompleted,
  onToggleComplete,
  onBack
}: ModuleDetailProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set([module.steps[0]?.id]));

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          background: '#334155',
          color: '#ECEDEE',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '0.875rem'
        }}
      >
        ← Back to Modules
      </button>

      <div style={{
        background: '#1e2022',
        border: '1px solid #334155',
        borderRadius: '0.5rem',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#ECEDEE',
              marginBottom: '0.5rem'
            }}>
              {module.title}
            </h1>
            <p style={{
              color: '#9BA1A6',
              fontSize: '1rem'
            }}>
              {module.description}
            </p>
          </div>
          <button
            onClick={onToggleComplete}
            style={{
              padding: '0.75rem 1.5rem',
              background: isCompleted ? '#00D9FF' : 'transparent',
              color: isCompleted ? '#0F1419' : '#00D9FF',
              border: `2px solid #00D9FF`,
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            {isCompleted ? '✓ Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      <div>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#ECEDEE',
          marginBottom: '1rem'
        }}>
          Steps ({module.steps.length})
        </h2>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {module.steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                background: '#1e2022',
                border: '1px solid #334155',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleStep(step.id)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#334155';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <div>
                  <span style={{
                    display: 'flex',
                    background: '#00D9FF',
                    color: '#0F1419',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    {index + 1}
                  </span>
                  <span style={{
                    color: '#ECEDEE',
                    fontWeight: '500'
                  }}>
                    {step.title}
                  </span>
                </div>
                <span style={{
                  color: '#9BA1A6',
                  transform: expandedSteps.has(step.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </button>

              {expandedSteps.has(step.id) && (
                <div style={{
                  padding: '1rem',
                  borderTop: '1px solid #334155',
                  background: '#151718'
                }}>
                  <p style={{
                    color: '#ECEDEE',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {step.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
