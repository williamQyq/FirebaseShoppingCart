import PropTypes from "prop-types";
import { useState } from "react";
import Product from "./Product";

export default function ProductsList({
  products,
  onAddProductToBuy,
  onDeleteProduct,
  onUpdateProduct,
}) {
  const productsPerPage = 20; //products per page
  const [activePage, setActivePage] = useState(1);
  const [editMode, setEditMode] = useState(false);

  //toggle edit mode
  const onToggleEditMode = () => {
    setEditMode(!editMode);
  };

  //render pagination
  const renderPagination = () => {
    const pages = Math.ceil(products.length / productsPerPage);

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

  //render products
  const renderProducts = () => {
    const start = (activePage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return products
      .slice(start, end)
      .map((p) => (
        <Product
          key={p.id}
          product={{ ...p }}
          editMode={editMode}
          onAddProductToBuy={onAddProductToBuy}
          onDeleteProduct={onDeleteProduct}
          onUpdateProduct={onUpdateProduct}
        ></Product>
      ));
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <h2>Products</h2>
        </div>
        <div className="col-4">
          {editMode ? (
            <button className="btn btn-primary" onClick={onToggleEditMode}>
              done
            </button>
          ) : (
            <button className="btn btn-primary" onClick={onToggleEditMode}>
              edit
            </button>
          )}
        </div>
      </div>
      <div className="products row mb-2">{renderProducts()}</div>
      <div className="pagination row mb-2">{renderPagination()}</div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onUpdateProduct: PropTypes.func.isRequired,
};
