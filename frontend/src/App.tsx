import { useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

type HelloResponse = {
  message: string;
};

export default function App() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${apiUrl}/api/hello`);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data: HelloResponse = await response.json();
      setMessage(data.message);
    } catch (requestError) {
      setMessage('');
      setError('Could not reach the backend.');
      console.error(requestError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="app">
      <div className="card">
        <button type="button" onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Call Backend'}
        </button>
        {message && <p>{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </main>
  );
}
