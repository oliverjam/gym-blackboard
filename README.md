# Blackboard
A place for weightlifting gyms to record one-rep maxes.

## Data Model

### lifters

| **Column** |    **Type**   | **Modifiers** |
| ---------- | ------------- | ------------- |
| id         | serial        | primary key   |
| name       | varchar(255)  | not null      |
| bodyweight | decimal(4, 1) | not null      |
| sex        | varchar(1)    | not null      |
| snatch     | decimal(4, 1) |               |
| c&j        | decimal(4, 1) |               |
| squat      | decimal(4, 1) |               |
| deadlift   | decimal(4, 1) |               |
| bench      | decimal(4, 1) |               |
| sinclair   | decimal(4, 1) |               |
| wilks      | decimal(4, 1) |               |
| updated    | date          |

### gyms

| **Column** |    **Type**   | **Modifiers** |
| ---------- | ------------- | ------------- |
| id         | serial        | primary key   |
| name       | varchar(255)  | not null      |
| postcode   | varchar(7)    | not null      |

### gym_lifters

| **Column** |    **Type**   |      **Modifiers**      |
| ---------- | ------------- | ----------------------- |
| lifter_id  | serial        | foreign key lifters(id) |
| gym_id     | varchar(255)  | foreign key gyms(id)    |
