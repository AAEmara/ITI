-- A function that takes actor_id and returns info about his films.

CREATE FUNCTION actor_films_info(id INT)
RETURNS TABLE (
  film_name TEXT,
  film_description TEXT,
  release_year YEAR
)
AS
$$
  BEGIN
    RETURN QUERY
      SELECT
        f.title AS film_name,
	f.description AS film_description,
	f.release_year
      FROM
        film AS f
      JOIN film_actor AS fa ON f.film_id = fa.film_id
      WHERE fa.actor_id = id;
  END;
$$ LANGUAGE plpgsql
