-- List all rentals with customer names.

SELECT 
  r.*,
  CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM rental AS r
JOIN customer AS c ON r.customer_id = c.customer_id;
