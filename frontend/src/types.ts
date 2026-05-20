export type LessonStep = {
  stepNumber: number;
  title: string;
  content: string;
  code: string | null;
};

export type Lesson = {
  id: number;
  title: string;
  concept: string;
  steps: LessonStep[];
};
