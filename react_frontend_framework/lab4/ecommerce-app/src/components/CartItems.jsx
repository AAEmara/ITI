import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CartData from "./CartData";

const CartItems = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <>
      <Table>
        <thead className="text-center">
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.length !== 0 &&
            cartProducts.map((product) => (
              <CartData productData={product} key={product.sku} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default CartItems;
