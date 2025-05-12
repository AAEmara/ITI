-- Creates a customer_backup table and a trigger to save a backup
-- for newly inserted customers.

CREATE TABLE IF NOT EXISTS customer_backup
(LIKE customer INCLUDING ALL);

CREATE OR REPLACE FUNCTION insert_customers_backup()
RETURNS TRIGGER
AS
$$
  BEGIN
    INSERT INTO customer_backup VALUES (NEW.*);
    RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER backup_new_customer
AFTER INSERT ON customer
FOR EACH ROW
EXECUTE FUNCTION insert_customers_backup();
