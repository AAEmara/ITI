-- Creates a view that shows total payments per customer.

CREATE VIEW total_customer_payments AS
SELECT
  SUM(p.amount) AS total_payments,
  CONCAT_WS(' ', c.first_name, c.last_name) AS customer_name
FROM
  payment AS p
JOIN customer AS c ON p.customer_id = c.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;
