import { useState } from 'react';
import type { Lesson } from './types';

type Props = {
  lesson: Lesson;
  /** Called when the user navigates back to the lesson list. */
  onBack: () => void;
};

/**
 * Steps through a lesson one step at a time. Shows a progress bar, the current
 * step's content and optional code snippet, Previous/Next navigation, and a
 * completion screen after the final step.
 */
export default function LessonViewer({ lesson, onBack }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const completed = stepIndex >= lesson.steps.length;
  const progress = Math.round((Math.min(stepIndex + 1, lesson.steps.length) / lesson.steps.length) * 100);

  if (completed) {
    return (
      <div className="lesson-viewer">
        <button className="back-btn" onClick={onBack}>← Back to lessons</button>
        <div className="step-card completion">
          <div className="completion-icon">✓</div>
          <span className="eyebrow">Great work</span>
          <h2>Lesson Complete!</h2>
          <p>You have finished <strong>{lesson.title}</strong>.</p>
          <button onClick={onBack}>Choose another lesson</button>
        </div>
      </div>
    );
  }

  const step = lesson.steps[stepIndex];
  const isLast = stepIndex === lesson.steps.length - 1;

  return (
    <div className="lesson-viewer">
      <button className="back-btn" onClick={onBack}>← Back to lessons</button>

      <header className="viewer-header">
        <span className="eyebrow">{lesson.concept}</span>
        <h1>{lesson.title}</h1>
        <p className="progress-label">Step {step.stepNumber} of {lesson.steps.length} · {progress}% complete</p>
        <div className="step-progress" aria-label={`${progress}% complete`}>
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="step-card">
        <span className="lesson-number">Step {step.stepNumber}</span>
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
          {isLast ? 'Complete Lesson' : 'Next step'}
        </button>
      </div>
    </div>
  );
}

