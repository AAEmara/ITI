-- Creates a view of all PG-13 rating films with their actors.

CREATE VIEW pg13_films_and_actors AS
SELECT
  f.title AS film_name,
  CONCAT_WS(' ', a.first_name, a.last_name) AS actor_name
FROM
  film AS f
JOIN film_actor AS fa ON f.film_id = fa.film_id
JOIN actor AS a ON a.actor_id = fa.actor_id
