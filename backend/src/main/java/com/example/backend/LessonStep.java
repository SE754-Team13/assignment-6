package com.example.backend;

/**
 * A single instructional step within a lesson.
 *
 * @param stepNumber 1-based position in the lesson
 * @param title      short heading for the step
 * @param content    explanatory text shown to the user
 * @param code       optional Java code snippet; {@code null} when no example is needed
 */
public record LessonStep(int stepNumber, String title, String content, String code) {}
