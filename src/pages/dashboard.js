import Navbar from '../components/Navbar';

const tasks = [
  "Finish UI layout",
  "Test task view",
  "Prepare demo"
];

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Your Tasks</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>✅ {task}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: '30px' }}>Schedule (Mock)</h3>
        <p>🕒 10 AM - UI<br />🕒 1 PM - Testing<br />🕒 3 PM - Demo</p>
      </main>
    </>
  );
}
