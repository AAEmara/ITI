import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data["products"]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container className="d-flex flex-column align-items-start">
        <p className="mt-5 mb-5 ps-3">
          Welcome to our shopping website, start browsing ...
        </p>
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="my-1 d-flex justify-content-center"
              key={product.id}
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
