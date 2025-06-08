import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to SnapTask 📸</h1>
        <p>Turn your images into tasks using AI!</p>
      </main>
    </>
  );
}
