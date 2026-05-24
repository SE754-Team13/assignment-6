package com.example.backend;

import java.util.List;

/**
 * An OOP lesson returned by the API.
 *
 * @param id      unique numeric identifier
 * @param title   human-readable lesson name
 * @param concept URL-safe slug for the OOP concept (e.g. {@code "inheritance"})
 * @param steps   ordered list of instructional steps
 */
public record Lesson(int id, String title, String concept, List<LessonStep> steps) {}
