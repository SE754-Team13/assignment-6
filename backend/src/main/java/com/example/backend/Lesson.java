package com.example.backend;

import java.util.List;

public record Lesson(int id, String title, String concept, List<LessonStep> steps) {}
