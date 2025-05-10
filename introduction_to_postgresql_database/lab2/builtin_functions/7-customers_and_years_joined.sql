-- Lists the customer names and the year they joined.

SELECT
  CONCAT_WS(' ', c.first_name, c.last_name) AS customer_name,
  EXTRACT(YEAR FROM c.create_date) AS year_joined
FROM
  customer AS c;
