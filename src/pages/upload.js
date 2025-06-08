import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Upload() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Upload an Image</h2>
        <input type="file" onChange={handleChange} />
        {image && <img src={image} alt="Preview" width="300" style={{ marginTop: '20px' }} />}
      </main>
    </>
  );
}
