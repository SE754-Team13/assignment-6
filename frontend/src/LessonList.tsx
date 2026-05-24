import type { Lesson } from './types';

type Props = {
  lessons: Lesson[];
  loading: boolean;
  error: string;
  /** Called when the user clicks a lesson card. */
  onSelect: (lesson: Lesson) => void;
};

/** Displays a grid of lesson cards for the user to choose from. */
export default function LessonList({ lessons, loading, error, onSelect }: Props) {
  const totalSteps = lessons.reduce((sum, lesson) => sum + lesson.steps.length, 0);

  return (
    <div className="lesson-list">
      <section className="hero-card">
        <div>
          <span className="eyebrow">Interactive OOP lessons</span>
          <h1>CodeCraft</h1>
          <p className="subtitle">
            Learn Object-Oriented Programming with short, guided lessons and clear Java examples.
          </p>
        </div>
        <div className="hero-stats" aria-label="Lesson summary">
          <div>
            <strong>{lessons.length}</strong>
            <span>Lessons</span>
          </div>
          <div>
            <strong>{totalSteps}</strong>
            <span>Total steps</span>
          </div>
        </div>
      </section>

      {error && <p className="notice error">{error}</p>}

      {loading && (
        <div className="lesson-grid" aria-label="Loading lessons">
          {[1, 2, 3].map(item => (
            <div className="lesson-card skeleton-card" key={item}>
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && lessons.length === 0 && (
        <div className="empty-state">
          <h2>No lessons found</h2>
          <p>Start the backend or add lesson data to begin learning.</p>
        </div>
      )}

      {!loading && lessons.length > 0 && (
        <div className="lesson-grid">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className="lesson-card"
              onClick={() => onSelect(lesson)}
            >
              <span className="lesson-number">Lesson {index + 1}</span>
              <h2>{lesson.title}</h2>
              <p>{lesson.concept}</p>
              <span className="card-footer">
                <span className="step-count">{lesson.steps.length} steps</span>
                <span className="start-link">Start →</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

