import PropTypes from "prop-types";

export default function ShoppingCart({ productsToBuy }) {
  const renderProductToBuy = (product, i) => {
    return (
      <li key={i}>
        <span>{product.name} </span>
        <span>${product.price}</span>
        <button className="btn btn-outline-danger btn-sm">Remove</button>
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
};
