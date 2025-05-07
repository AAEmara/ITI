-- Counts how many films are in each rating category.

SELECT
  c.name AS category_name,
  COUNT(fc.category_id) AS category_count
FROM
  category AS c
JOIN film_category AS fc ON fc.category_id = c.category_id
JOIN film AS f ON f.film_id = fc.film_id
GROUP BY c.category_id, c.name;
