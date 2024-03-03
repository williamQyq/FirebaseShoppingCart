import React from "react";
import PropTypes from "prop-types";

export default function CreateProductForm({ onAddProduct }) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();

  const onAddProductHelper = (e) => {
    e.preventDefault();

    onAddProduct({
      name: nameRef.current.value,
      price: +priceRef.current.value,
      image: "https://via.placeholder.com/150",
    });
  };
  return (
    <div>
      <h2>Create Product</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            ref={priceRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="text" className="form-control" id="image" />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onAddProductHelper}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

CreateProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};
