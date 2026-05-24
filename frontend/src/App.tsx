import { useState, useEffect } from 'react';
import type { Lesson } from './types';
import LessonList from './LessonList';
import LessonViewer from './LessonViewer';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

/**
 * Root component. Fetches all lessons from the backend on mount and manages
 * which view is active: the lesson list or the step-by-step viewer.
 */
export default function App() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selected, setSelected] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${apiUrl}/api/lessons`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to load lessons');
        return r.json() as Promise<Lesson[]>;
      })
      .then(data => {
        setLessons(data);
        setError('');
      })
      .catch(() => setError('Could not reach the backend. Is Spring Boot running on port 8080?'))
      .finally(() => setLoading(false));
  }, []);

  if (selected) {
    return (
      <main className="app">
        <LessonViewer lesson={selected} onBack={() => setSelected(null)} />
      </main>
    );
  }

  return (
    <main className="app">
      <LessonList
        lessons={lessons}
        loading={loading}
        error={error}
        onSelect={setSelected}
      />
    </main>
  );
}

