-- Display all actors with the films they appeared in.

SELECT 
  DISTINCT CONCAT(a.first_name, ' ', a.last_name) AS actor_name,
  f.title AS film_title
FROM
  actor AS a
JOIN film_actor AS fa ON fa.actor_id = a.actor_id
JOIN film AS f ON fa.film_id = f.film_id;
