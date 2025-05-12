-- Tracks when a film's title is updated, and logs the old and new titles
-- along with the time of the change in a new table called `film_audit`.

CREATE TABLE IF NOT EXISTS film_audit
  (film_id INT, old_title TEXT, new_title TEXT, change_time TIMESTAMP);

CREATE OR REPLACE FUNCTION add_film_audit()
RETURNS TRIGGER
AS
$$
  BEGIN
    IF OLD.title <> NEW.title THEN
      INSERT INTO film_audit (film_id, old_title, new_title, change_time)
      VALUES(OLD.film_id, OLD.title, NEW.title, now());
    END IF;
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER track_film_change
AFTER UPDATE ON film
FOR EACH ROW
EXECUTE FUNCTION add_film_audit();
