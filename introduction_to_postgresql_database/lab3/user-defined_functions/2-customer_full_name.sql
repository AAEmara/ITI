-- A function that takes customer_id and returns full name
-- (first_name, and last_name)

CREATE FUNCTION customer_name(id INT)
RETURNS TEXT AS
$$
  BEGIN
    RETURN (
      SELECT
	CONCAT_WS(' ', c.first_name, c.last_name) AS customer_name
      FROM
	customer AS c
      WHERE c.customer_id = id
    );
  END;
$$ LANGUAGE plpgsql;
