-- Show all films available in inventory with their titles.

SELECT
  f.title AS film_title
FROM
  film AS f
JOIN inventory AS i ON i.film_id = f.film_id
LEFT JOIN rental AS r ON i.inventory_id = r.inventory_id
WHERE r.rental_id IS NULL;
