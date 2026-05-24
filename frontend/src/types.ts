/** One instructional step within a lesson, optionally including a code snippet. */
export type LessonStep = {
  stepNumber: number;
  title: string;
  content: string;
  /** Java code sample shown in a code block, or null when no example is needed. */
  code: string | null;
};

/** An OOP lesson composed of an ordered sequence of steps. */
export type Lesson = {
  id: number;
  title: string;
  /** URL-safe slug identifying the OOP concept (e.g. "inheritance"). */
  concept: string;
  steps: LessonStep[];
};
