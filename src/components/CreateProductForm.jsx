import React from "react";
import PropTypes from "prop-types";
import { Product } from "../models/ProductsService";

export default function CreateProductForm({
  onAddProduct,
  onRemoveAllProducts,
}) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();

  const onAddProductHelper = (e) => {
    e.preventDefault();

    //add product to db
    onAddProduct(
      new Product({
        name: nameRef.current.value,
        price: +priceRef.current.value,
        image: "https://via.placeholder.com/150",
      })
    );
  };

  const onAddProductHelperx20 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 20; i++) {
      onAddProduct(
        new Product({
          name: nameRef.current.value + i,
          price: +priceRef.current.value + i,
          image: "https://via.placeholder.com/150",
        })
      );
    }
  };

  const onRemoveProductHelper = (e) => {
    e.preventDefault();
    onRemoveAllProducts();
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
        <div className="form-group mb-2">
          <label htmlFor="image">Image</label>
          <input type="text" className="form-control" id="image" />
        </div>
        <button
          type="submit"
          className="btn btn-primary mr-3"
          onClick={onAddProductHelper}
        >
          Add Product
        </button>
        <button
          className="btn btn-secondary mr-3"
          onClick={onAddProductHelperx20}
        >
          Add Product x20
        </button>
        <button className="btn btn-danger mr-3" onClick={onRemoveProductHelper}>
          Remove All Products
        </button>
      </form>
    </div>
  );
}

CreateProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  onRemoveAllProducts: PropTypes.func.isRequired,
};
