import PropTypes from "prop-types";

export default function Product({ product, onAddProductToBuy }) {
  return (
    <div className="col-4">
      <div className="card ">
        <img src={product.image} alt={product.name} />
        {product.name}
        <span>${product.price}</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => onAddProductToBuy(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
