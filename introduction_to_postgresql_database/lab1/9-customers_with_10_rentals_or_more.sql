-- List customers who made at least 10 rentals.

SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM customer AS c
JOIN rental AS r ON c.customer_id = r.customer_id
GROUP BY c.customer_id
HAVING COUNT(r.rental_id) >= 10;
