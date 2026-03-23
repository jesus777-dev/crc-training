export default function NotFound() {
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
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>Page not found</p>
      <a href="/crc-training/" style={{
        padding: '0.75rem 1.5rem',
        background: '#00D9FF',
        color: '#0F1419',
        textDecoration: 'none',
        borderRadius: '0.375rem',
        fontWeight: '600'
      }}>
        Go Home
      </a>
    </div>
  );
}
