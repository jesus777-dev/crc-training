'use client';

import { useState, useEffect } from 'react';
import { lmsData } from '@/lib/lms-data';
import SectionCard from '@/components/SectionCard';
import ModuleList from '@/components/ModuleList';
import ModuleDetail from '@/components/ModuleDetail';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Load progress from localStorage (client-side only)
    try {
      const saved = localStorage.getItem('lms-progress');
      if (saved) setProgress(JSON.parse(saved));
    } catch (e) {
      console.error('Failed to load progress:', e);
    }

    // Check online status
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Save progress to localStorage (client-side only)
    try {
      localStorage.setItem('lms-progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [progress]);

  const toggleProgress = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const section = selectedSection ? lmsData.find(s => s.id === selectedSection) : null;
  const module = selectedModule && section ? section.modules.find(m => m.id === selectedModule) : null;

  const totalModules = lmsData.reduce((sum, s) => sum + s.modules.length, 0);
  const completedModules = Object.values(progress).filter(Boolean).length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  return (
    <main style={{ minHeight: '100vh', background: '#0F1419' }}>
      {/* Header */}
      <header style={{
        background: '#151718',
        borderBottom: '1px solid #334155',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00D9FF' }}>
              TechLearn Pro
            </h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.875rem',
                color: isOnline ? '#00FF88' : '#FF3366'
              }}>
                {isOnline ? '🟢 Online' : '🔴 Offline'}
              </span>
              {selectedSection && (
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    setSelectedSection(null);
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#334155',
                    color: '#ECEDEE',
                    borderRadius: '0.375rem',
                    cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {!selectedSection ? (
          <>
            {/* Progress Overview */}
            <div style={{
              background: '#1e2022',
              border: '1px solid #334155',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#ECEDEE' }}>
                Your Progress
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `conic-gradient(#00D9FF 0deg ${progressPercent * 3.6}deg, #334155 ${progressPercent * 3.6}deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#00D9FF'
                }}>
                  {progressPercent}%
                </div>
                <div>
                  <p style={{ color: '#9BA1A6', marginBottom: '0.5rem' }}>
                    {completedModules} of {totalModules} modules completed
                  </p>
                  <div style={{
                    width: '200px',
                    height: '8px',
                    background: '#334155',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${progressPercent}%`,
                      height: '100%',
                      background: '#00D9FF',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Training Sections */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#ECEDEE' }}>
                Training Sections
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {lmsData.map(section => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    moduleCount={section.modules.length}
                    onClick={() => setSelectedSection(section.id)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : selectedModule ? (
          <ModuleDetail
            module={module!}
            isCompleted={progress[selectedModule] || false}
            onToggleComplete={() => toggleProgress(selectedModule)}
            onBack={() => setSelectedModule(null)}
          />
        ) : (
          <ModuleList
            section={section!}
            progress={progress}
            onSelectModule={setSelectedModule}
            onToggleComplete={toggleProgress}
          />
        )}
      </div>
    </main>
  );
}
