import { useState } from 'react';
import type { Lesson } from './types';

type Props = {
  lesson: Lesson;
  onBack: () => void;
};

export default function LessonViewer({ lesson, onBack }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const completed = stepIndex >= lesson.steps.length;

  if (completed) {
    return (
      <div className="lesson-viewer">
        <div className="step-card completion">
          <div className="completion-icon">✓</div>
          <h2>Lesson Complete!</h2>
          <p>You have finished <strong>{lesson.title}</strong>.</p>
          <button onClick={onBack}>Back to Lessons</button>
        </div>
      </div>
    );
  }

  const step = lesson.steps[stepIndex];
  const isLast = stepIndex === lesson.steps.length - 1;

  return (
    <div className="lesson-viewer">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h1>{lesson.title}</h1>
      <div className="step-progress">
        <div
          className="progress-bar"
          style={{ width: `${((stepIndex + 1) / lesson.steps.length) * 100}%` }}
        />
      </div>
      <p className="progress-label">Step {step.stepNumber} of {lesson.steps.length}</p>
      <div className="step-card">
        <h2>{step.title}</h2>
        <p className="step-content">{step.content}</p>
        {step.code && (
          <pre className="code-block"><code>{step.code}</code></pre>
        )}
      </div>
      <div className="step-nav">
        <button
          onClick={() => setStepIndex(i => i - 1)}
          disabled={stepIndex === 0}
        >
          Previous
        </button>
        <button onClick={() => setStepIndex(i => i + 1)}>
          {isLast ? 'Complete Lesson' : 'Next'}
        </button>
      </div>
    </div>
  );
}
