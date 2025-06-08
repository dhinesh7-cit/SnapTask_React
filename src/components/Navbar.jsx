import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <Link href="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
      <Link href="/upload" style={{ color: 'white', marginRight: '10px' }}>Upload</Link>
      <Link href="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
    </nav>
  );
}
