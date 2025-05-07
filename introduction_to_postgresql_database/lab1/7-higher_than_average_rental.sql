-- Find all films with a rental rate higher than the average rental rate

SELECT
  f.title AS film_title
FROM
  film AS f
WHERE f.rental_rate >
  (SELECT AVG(f.rental_rate)
   FROM film AS f);
