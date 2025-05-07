-- Find customers who have never rented a film

SELECT
  c.customer_id,
  CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM
  customer AS c
LEFT JOIN rental AS r ON c.customer_id = r.customer_id
WHERE r.rental_id IS NULL;
