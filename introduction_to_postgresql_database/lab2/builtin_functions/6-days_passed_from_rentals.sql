-- Shows the rental date and how many days have passed since each rental.

SELECT
  rental_date,
  EXTRACT(DAY FROM (NOW() - rental_date)) AS days_passed_from_rental
FROM
  rental;
