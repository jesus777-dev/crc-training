'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0F1419',
      color: '#ECEDEE',
      padding: '2rem'
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong</h2>
      <button
        onClick={() => reset()}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#00D9FF',
          color: '#0F1419',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Try again
      </button>
    </div>
  );
}
