import PropTypes from "prop-types";
import { useState } from "react";
import Product from "./Product";

export default function ProductsList({ products, onAddProductToBuy }) {
  const [activePage, setActivePage] = useState(1);

  const renderPagination = () => {
    const pages = Math.ceil(products.length);
    const onClickNext = () => {
      setActivePage(activePage + 1);
    };
    const onClickPrevious = () => {
      setActivePage(activePage - 1);
    };
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
            <span className="page-link" onClick={onClickPrevious}>
              Previous
            </span>
          </li>
          {Array.from({ length: pages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${activePage === i + 1 ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => setActivePage(i + 1)}
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li className={`page-item ${activePage === pages ? "disabled" : ""}`}>
            <span className="page-link" onClick={onClickNext}>
              Next
            </span>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <h2>Products</h2>
      <div className="products row">
        {products.map((p, i) => (
          <Product
            key={i}
            product={p}
            onAddProductToBuy={onAddProductToBuy}
          ></Product>
        ))}
      </div>
      {renderPagination()}
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
