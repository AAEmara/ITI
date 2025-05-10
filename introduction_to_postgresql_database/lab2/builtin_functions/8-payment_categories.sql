-- Labels each payment as the following:
-- 'High' if amount >8,
-- 'Medium' if > 5,
-- else 'Low'.

SELECT
  CASE
    WHEN p.amount > 8 THEN 'High'
    WHEN p.amount > 5 THEN 'Medium'
    ELSE 'Low'
  END AS payment_category
FROM
  payment AS p;
