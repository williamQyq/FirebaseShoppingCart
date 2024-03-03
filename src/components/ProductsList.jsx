import PropTypes from "prop-types";

import Product from "./Product";

export default function ProductsList({ products }) {
  return (
    <>
      <h2>Products</h2>
      <div className="products row">
        {products.map((p, i) => (
          <Product key={i} product={p}></Product>
        ))}
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};
