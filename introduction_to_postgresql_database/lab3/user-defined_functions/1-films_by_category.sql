-- A function that takes category name and returns the number of films 
-- in this category.

CREATE FUNCTION films_by_category(category_name TEXT)
RETURNS INT
AS
$$
  BEGIN
    RETURN (
      SELECT
        COUNT(f.film_id) AS films_count
      FROM
        film AS f
      JOIN film_category AS fc ON f.film_id = fc.film_id
      JOIN category AS c ON c.category_id = fc.category_id
      WHERE
        c.name = category_name
    );
  END;
$$ LANGUAGE plpgsql;
