-- A trigger that prevents a negative value for rental_rate column
-- in the film table.

CREATE OR REPlACE FUNCTION prevent_negative_rental_rates()
RETURNS TRIGGER
AS
$$
  BEGIN
    IF NEW.rental_rate < 0 THEN
      RAISE EXCEPTION 'rental_rate cannot be negative';
    END IF;
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER no_negative_rental
BEFORE INSERT OR UPDATE
ON film FOR EACH ROW
EXECUTE FUNCTION prevent_negative_rental_rates();
