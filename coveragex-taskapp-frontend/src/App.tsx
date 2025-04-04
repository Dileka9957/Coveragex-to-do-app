
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Checking...');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/ping')
      .then(response => {
        setConnectionStatus(response.data.message);
      })
      .catch(err => {
        setError('Failed to connect to backend');
        console.error(err);
      });
  }, []);

  return (
    <>
     
      <h1>To-do App</h1>
      <h2 style={{ color: 'black' }}>Backend Connection Status</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p style={{ color: 'green' }}>{connectionStatus}</p>
      )}
    </>
  )
}

export default App
