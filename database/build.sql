BEGIN;

CREATE TABLE lifters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  bodyweight DECIMAL(4, 1) NOT NULL,
  sex VARCHAR(1) NOT NULL,
  gym VARCHAR(255),
  snatch DECIMAL(4, 1),
  clean_jerk DECIMAL(4, 1),
  squat DECIMAL(4, 1),
  deadlift DECIMAL(4, 1),
  bench DECIMAL(4, 1),
  sinclair DECIMAL(4, 1),
  wilks DECIMAL(4, 1),
  updated DATE
);

CREATE TABLE gyms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  postcode VARCHAR(7) NOT NULL
);

CREATE TABLE gym_lifters (
  lifter_id INTEGER REFERENCES lifters(id),
  gym_id INTEGER REFERENCES gyms(id)
);

INSERT INTO lifters (name, bodyweight, sex, snatch, clean_jerk, sinclair, updated) VALUES (
  'Lü Xiaojun',
  77,
  'm',
  177,
  203,
  479,
  '2017-04-01'
),
(
  'Deng Wei',
  63.3,
  'f',
  115,
  147,
  348,
  '2017-04-01'
);

COMMIT;
