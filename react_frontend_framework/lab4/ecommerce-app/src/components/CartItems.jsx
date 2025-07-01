import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CartData from "./CartData";

const CartItems = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
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
      <div className="d-flex justify-content-end">
        <div
          className="border p-3 d-flex justify-content-between align-items-center"
          style={{ maxWidth: "300px" }}
        >
          <strong>Total:</strong>
          <span>${cartTotalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

export default CartItems;
