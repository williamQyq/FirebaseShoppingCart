import React from "react";
import PropTypes from "prop-types";
import { Product } from "../models/ProductsService";

export default function CreateProductForm({
  onAddProduct,
  onRemoveAllProducts,
}) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const formRef = React.createRef(null);

  const getFormData = () => {
    const formData = new FormData(formRef.current);
    formRef.current.reset(); //reset form after return
    return Object.fromEntries(formData); //convert formData to object
  };

  const handleAddProductOnClick = (e) => {
    e.preventDefault();
    const formData = getFormData();

    //add product to db
    onAddProduct(
      new Product({
        name: formData.name,
        price: +formData.price,
        image: "https://via.placeholder.com/150",
      })
    );
  };

  const handleAddMultiProductOnClick = (e) => {
    e.preventDefault();
    const formData = getFormData();

    for (let i = 0; i < 20; i++) {
      onAddProduct(
        new Product({
          name: formData.name + i,
          price: +formData.price,
          image: "https://via.placeholder.com/150",
        })
      );
    }
  };

  const handleRemoveProduct = (e) => {
    e.preventDefault();
    onRemoveAllProducts();
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form ref={formRef} action="/" onSubmit={handleAddProductOnClick}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            ref={nameRef}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            required
            ref={priceRef}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Image</label>
          <input type="text" className="form-control" name="image" required />
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          Add Product
        </button>
        <button
          className="btn btn-secondary mr-3"
          onClick={handleAddMultiProductOnClick}
        >
          Add Product x20
        </button>
        <button className="btn btn-danger mr-3" onClick={handleRemoveProduct}>
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
