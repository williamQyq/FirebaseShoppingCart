import PropTypes from "prop-types";

export default function ShoppingCart({
  productsToBuy,
  onRemoveProductFromCart,
}) {
  const renderProductToBuy = (product, i) => {
    return (
      <li key={i}>
        <span>{product.name} </span>
        <span>${product.price}</span>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onRemoveProductFromCart(i)}
        >
          Remove
        </button>
      </li>
    );
  };
  return (
    <div>
      <ul>
        {productsToBuy.map((product, i) => renderProductToBuy(product, i))}
      </ul>
      Total: ${productsToBuy.reduce((acc, product) => acc + product.price, 0)}
    </div>
  );
}

ShoppingCart.propTypes = {
  productsToBuy: PropTypes.array.isRequired,
  onRemoveProductFromCart: PropTypes.func.isRequired,
};
