import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const AddToCartButton = ({ cartItem }) => {
  const dispatch = useDispatch();
  const updateCart = () => dispatch(addToCart(cartItem));

  return (
    <>
      <Button
        className="border border-2 border-black rounded-5 px-4 mt-2"
        variant="outline-success"
        onClick={() => updateCart()}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;
