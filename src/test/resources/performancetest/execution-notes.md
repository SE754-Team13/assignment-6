# JMeter Execution Notes

Test plan:

- `plans/lesson-api-performance-test.jmx`

Executed against:

- `http://localhost:8080/api/lessons`
- `http://localhost:8080/api/lessons/{id}`

Scenario properties used:

- Normal load: `users=10`, `rampUp=10`, `loops=10`, `lessonId=2`, `maxResponseTime=500`
- Peak load: `users=30`, `rampUp=10`, `loops=10`, `lessonId=2`, `maxResponseTime=1000`
- Stress load: `users=50`, `rampUp=10`, `loops=10`, `lessonId=2`, `maxResponseTime=1500`

Generated result files:

- `results/lesson-api-normal.csv`
- `results/lesson-api-peak.csv`
- `results/lesson-api-stress.csv`

Each loop issues:

1. `GET /api/lessons`
2. `GET /api/lessons/{id}`

Assertions included:

- HTTP status code must be `200`
- Response body must contain expected lesson JSON content
- Response time must stay below the configured `maxResponseTime`
