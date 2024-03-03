import "./App.css";

import { useEffect, useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import CreateProductForm from "./components/CreateProductForm.jsx";
import ProductsService from "./models/ProductsService.js";

export default function App() {
  //Products
  const [products, setProducts] = useState([]);
  //Products to buy
  const [productsToBuy, setProductsToBuy] = useState([]);

  useEffect(() => {
    //product service
    const productsService = new ProductsService();
    productsService.getProducts().then((data) => setProducts(data));

    return () => {};
  }, [products, productsToBuy]);

  const onAddProduct = (newProduct) => {
    setProducts([
      ...products,
      {
        image: "https://via.placeholder.com/150",
        ...newProduct,
      },
    ]);
  };
  const onAddProductToBuy = (product) => {
    setProductsToBuy([...productsToBuy, product]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>Basic Shopping Site</h1>

          <ProductsList
            products={products}
            onAddProductToBuy={onAddProductToBuy}
          />

          <CreateProductForm onAddProduct={onAddProduct} />
        </div>
        {/* col-8 */}

        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart productsToBuy={productsToBuy} onRemoveProduct />
        </div>
      </div>
    </div>
  );
}
