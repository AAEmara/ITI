import QuantityButton from "./QuantityButton";

const CartData = ({ productData }) => {
  const productImage = productData.image;
  const productTitle = productData.title;
  const productSKU = productData.sku;
  const productPrice = productData.price;

  return (
    <tr className="text-center">
      <td>
        <div className="d-flex">
          <div>
            <img
              src={productImage}
              style={{ width: 100, backgroundColor: "var(--bs-light)" }}
            />
          </div>
          <div>
            <div>
              <p style={{ fontWeight: "bold" }}>{productTitle}</p>
            </div>
            <div>
              <p>Product SKU: {productSKU}</p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <QuantityButton productData={productData} />
      </td>
      <td></td>
      <td style={{ fontWeight: "bold" }}>${productPrice}</td>
    </tr>
  );
};

export default CartData;
