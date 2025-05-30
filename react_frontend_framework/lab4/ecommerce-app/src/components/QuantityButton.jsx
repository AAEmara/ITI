import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/slices/cartSlice";

const QuantityButton = ({ productData }) => {
  const dispatch = useDispatch();
  const updateIncreasedQuantity = () => dispatch(increaseQuantity(productData));
  const updateDecreasedQuantity = () => dispatch(decreaseQuantity(productData));

  return (
    <>
      <div>
        <ButtonGroup>
          <Button
            size="lg"
            className="rounded-start"
            variant="secondary"
            onClick={() => updateDecreasedQuantity()}
            disabled={productData.quantity <= 1}
          >
            -
          </Button>
          <Button variant="secondary">{productData.quantity}</Button>
          <Button
            className="rounded-end"
            variant="secondary"
            onClick={() => updateIncreasedQuantity()}
            disabled={productData.quantity >= productData.stock} // TODO: Fix the stock bug
          >
            +
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default QuantityButton;
