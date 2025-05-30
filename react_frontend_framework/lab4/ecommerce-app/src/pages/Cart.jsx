import { Container } from "react-bootstrap";
import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <Container>
      <h1>Cart</h1>
      <CartItems />
    </Container>
  );
};

export default Cart;
