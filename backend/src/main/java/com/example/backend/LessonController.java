package com.example.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST controller exposing lesson data under {@code /api}.
 *
 * <p>CORS is allowed from the Vite dev server (ports 5173–5175) so the
 * frontend can call these endpoints without a proxy.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:5175"})
public class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    /**
     * Returns all available lessons.
     *
     * <p>{@code GET /api/lessons} → {@code 200 OK} with a JSON array of {@link Lesson}.
     */
    @GetMapping("/lessons")
    public List<Lesson> getAllLessons() {
        return lessonService.getAll();
    }

    /**
     * Returns a single lesson by its numeric ID.
     *
     * <p>{@code GET /api/lessons/{id}} → {@code 200 OK} with the {@link Lesson}, or
     * {@code 404 Not Found} if no lesson exists for that ID.
     */
    @GetMapping("/lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable int id) {
        return lessonService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
