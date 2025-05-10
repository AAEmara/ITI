-- Creates a composite index that speeds up the following query.
-- SELECT * FROM film
-- WHERE rating = 'PG' AND rental_duration = 7;

CREATE INDEX rating_rental_duration_index ON film(rating, rental_duration);
