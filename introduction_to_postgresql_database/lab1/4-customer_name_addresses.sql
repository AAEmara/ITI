-- Show customer names with their addresses.

SELECT
  CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
  a.address AS address_1,
  a.address2 AS address_2
FROM
  customer AS c
JOIN address AS a ON c.address_id = a.address_id;
