import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InStockBadge from "./InStockBadge";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <Card
        style={{ width: "300px" }}
        className="h-100 border-0"
        id="product-card"
      >
        <div style={{ backgroundColor: "var(--bs-light)" }}>
          <div className="ms-2 mt-2">
            <InStockBadge stock={product.stock}></InStockBadge>
          </div>
          <Card.Img
            style={{ cursor: "pointer" }}
            variant="top"
            src={product.thumbnail}
            onClick={() => handleProductDetails(product.id)}
          ></Card.Img>
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between">
            <Card.Title
              className="me-3 mb-3"
              id="product-title"
              style={{ cursor: "pointer" }}
              onClick={() => handleProductDetails(product.id)}
            >
              {product.title}
            </Card.Title>
            <Card.Text style={{ fontWeight: "bold" }}>
              <sup>$</sup>
              {Math.floor(product.price)}
              <sup>
                .
                {product.price % 1 === 0
                  ? "00"
                  : ((product.price * 100) % 100).toFixed(0)}
              </sup>
            </Card.Text>
          </div>
          <Card.Text>{product.description}</Card.Text>
          <div>
            <StarRating rating={product.rating}></StarRating>
            <Button
              className="border border-2 border-black rounded-5 px-4 mt-2"
              variant="outline-success"
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
