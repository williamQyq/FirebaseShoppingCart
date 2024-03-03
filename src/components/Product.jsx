import React from "react";
import PropTypes from "prop-types";

export default function Product({ product }) {
  return (
    <div className="col-4">
      <div className="card ">
        <img src={product.image} alt={product.name} />
        {product.name}
        <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
