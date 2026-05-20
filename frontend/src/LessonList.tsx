import type { Lesson } from './types';

type Props = {
  lessons: Lesson[];
  onSelect: (lesson: Lesson) => void;
};

export default function LessonList({ lessons, onSelect }: Props) {
  return (
    <div className="lesson-list">
      <h1>CodeCraft</h1>
      <p className="subtitle">Learn Object-Oriented Programming step by step</p>
      <div className="lesson-grid">
        {lessons.map(lesson => (
          <button
            key={lesson.id}
            className="lesson-card"
            onClick={() => onSelect(lesson)}
          >
            <h2>{lesson.title}</h2>
            <span className="step-count">{lesson.steps.length} steps</span>
          </button>
        ))}
      </div>
    </div>
  );
}
