import { Button } from "react-bootstrap";
import { removeItem } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const RemoveItemButton = ({ productData }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => dispatch(removeItem(productData));
  return (
    <Button
      className="py-2 px-3"
      variant="light"
      onClick={() => deleteProduct()}
    >
      X
    </Button>
  );
};

export default RemoveItemButton;
