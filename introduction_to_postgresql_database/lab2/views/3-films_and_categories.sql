-- Creates a view showing films and their categories.

CREATE VIEW films_and_categories AS
SELECT
  f.title AS film_name,
  c.name AS film_category
FROM
  film AS f
JOIN film_category AS fc ON f.film_id = fc.film_id
JOIN category AS c ON c.category_id = fc.category_id;
