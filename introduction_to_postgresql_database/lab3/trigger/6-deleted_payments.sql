-- Creates a trigger on payment table that copies deleted rows into a new 
-- table named deleted_payments.

CREATE TABLE deleted_payments (LIKE payment INCLUDING ALL);

CREATE OR REPLACE FUNCTION save_deleted_payments()
RETURNS TRIGGER
AS
$$
  BEGIN
    INSERT INTO deleted_payments VALUES(OLD.*);
    RETURN OLD;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER copy_deleted_payments
AFTER DELETE ON payment
FOR EACH ROW
EXECUTE FUNCTION save_deleted_payments();
