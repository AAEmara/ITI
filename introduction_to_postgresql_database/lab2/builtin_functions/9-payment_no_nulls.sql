-- Shows the payment amount and replace any null values with 0.

SELECT
  COALESCE(p.amount, 0) AS payment_amount
FROM
  payment AS p;
