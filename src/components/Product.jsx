import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function Product({
  product,
  onAddProductToBuy,
  onDeleteProduct,
  onUpdateProduct,
  editMode,
}) {
  const [editedProduct, setProduct] = useState(product);

  useEffect(() => {
    if (!editMode && !productIsNotEdited(product, editedProduct)) {
      console.log("Product edited: ", editedProduct);
      onUpdateProduct(editedProduct.id, editedProduct);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

  //check if product is edited
  const productIsNotEdited = (product1, product2) => {
    return JSON.stringify(product1) === JSON.stringify(product2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...editedProduct, [name]: value });
  };

  //render button based on edit mode
  const renderButton = () => {
    return editMode ? (
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDeleteProduct(editedProduct.id)}
      >
        Delete
      </button>
    ) : (
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => onAddProductToBuy(editedProduct)}
      >
        Add to Cart
      </button>
    );
  };

  const renderProductDetail = () => {
    return editMode ? (
      <div className="product-detail-edit">
        <input
          className="form-control"
          type="text"
          name="name"
          defaultValue={editedProduct.name}
          onChange={handleInputChange}
        />
        <input
          className="form-control"
          type="number"
          name="price"
          defaultValue={editedProduct.price}
          onChange={handleInputChange}
        />
      </div>
    ) : (
      <div className="product-detail">
        {editedProduct.name}
        <span>${editedProduct.price}</span>
      </div>
    );
  };

  return (
    <div className="col-4">
      <div className="card w-100">
        <img src={editedProduct.image} alt={editedProduct.name} />
        <div className="card-body">
          {renderProductDetail()}
          <div>{renderButton()}</div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  onUpdateProduct: PropTypes.func.isRequired,
};
