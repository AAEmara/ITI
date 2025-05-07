-- Find actors who appear in more than 10 films.

SELECT
  CONCAT(a.first_name, ' ', a.last_name) AS actor_name
FROM actor AS a
JOIN film_actor AS fa ON  a.actor_id = fa.actor_id
JOIN film AS f ON f.film_id = fa.film_id
GROUP BY a.actor_id, a.first_name, a.last_name
HAVING COUNT(fa.film_id) > 10;
