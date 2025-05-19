import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";

const InStockBadge = (stock) => {
  const [stockState, setStockState] = useState("");

  useEffect(() => {
    stock === 0 ? setStockState("Out of Stock") : setStockState("In Stock");
  }, [stock]);
  return (
    <>
      <Badge
        className="rounded-4 px-3 py-1"
        bg={stockState === "In Stock" ? "success" : "danger"}
      >
        {stockState}
      </Badge>
    </>
  );
};

export default InStockBadge;
