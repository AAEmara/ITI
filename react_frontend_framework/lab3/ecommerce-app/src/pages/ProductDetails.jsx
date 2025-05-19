import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import StarRating from "../components/StarRating";
import InStockBadge from "../components/InStockBadge";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";

const ProductDetails = () => {
  let params = useParams();
  const [product, setProduct] = useState({});
  const [reviewsCount, setReviewsCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    if (!product.reviews) return;
    setReviewsCount(Object.keys(product.reviews).length);
  }, [product]);
  return (
    <>
      <Container className="mt-4 d-flex flex-row justify-content-between">
        <div className="me-5">
          {product.images?.[0] && (
            <img
              style={{ backgroundColor: "var(--bs-light)" }}
              className="w-100"
              src={product.images[0]}
            />
          )}
        </div>

        <div>
          <div>
            <h3>{product.title}</h3>
            <p className="mb-2">{product.description}</p>
            <div>
              <StarRating
                rating={product.rating}
                reviewsCount={reviewsCount}
              ></StarRating>
            </div>
          </div>

          <hr />

          <div className="mt-3">
            <h5 className="mb-0">
              ${product.price} or {Math.round(product.price / 6) + 1}.00/month
            </h5>
            <p>Suggested payments with 6 months special financing</p>
          </div>

          <hr />

          <div>
            <InStockBadge stock={product.stock}></InStockBadge>
            <p className="mt-4 mb-1 ms-2">More Information</p>
            <div>
              <Button className="me-4 rounded-4 px-4" variant="secondary">
                Category
              </Button>
              <Button className="me-4 rounded-4 px-4" variant="secondary">
                Brand
              </Button>
            </div>
          </div>

          <hr />
          <div className="mt-3 d-flex flex-row">
            <div>
              <ButtonGroup>
                <Button
                  size="lg"
                  className="rounded-start"
                  variant="secondary"
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                >
                  -
                </Button>
                <Button variant="secondary">{quantity}</Button>
                <Button
                  className="rounded-end"
                  variant="secondary"
                  onClick={() =>
                    setQuantity(Math.min(quantity + 1, product.stock))
                  }
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
            {product.stock <= 12 ? (
              <div style={{ fontSize: "12px" }} className="ms-2">
                <p className="mb-0">
                  Only{" "}
                  <span style={{ color: "orange" }}>{product.stock} items</span>{" "}
                  Left!
                </p>
                <p className="mt-0">Don't miss it</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mt-4">
            <Button variant="success" className="me-4 px-5 py-2 rounded-5">
              Buy Now
            </Button>
            <Button variant="outline-success" className="rounded-5 px-5 py-2">
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
