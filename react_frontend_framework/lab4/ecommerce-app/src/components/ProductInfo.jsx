import { ListGroup, Card } from "react-bootstrap";

const ProductInfo = ({ product, reviewsCount }) => {
  return (
    <>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.title}</h3>
            <p className="mb-0">{product.description}</p>
            <StarRating
              rating={product.rating}
              reviewsCount={reviewsCount}
            ></StarRating>
          </ListGroup.Item>

          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Card>
      <h1>I'm Product Info</h1>
    </>
  );
};

export default ProductInfo;
