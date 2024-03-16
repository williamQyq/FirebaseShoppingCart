import "./App.css";

import { useEffect, useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import CreateProductForm from "./components/CreateProductForm.jsx";
import { ProductsService } from "./models/ProductsService.js";

export default function App() {
  //Products
  const [products, setProducts] = useState([]);
  //Products to buy
  const [productsToBuy, setProductsToBuy] = useState([]);
  const productsService = new ProductsService();

  useEffect(() => {
    //refresh products
    refreshProducts();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshProducts = async () => {
    const products = await productsService.getProducts();
    setProducts(products);
  };

  //add product to firestore
  const onAddProduct = async (product) => {
    console.log("onAddProduct: ", product);
    await productsService.addProduct(product);

    // I think you do not need to refresh it since useEffect will do it for you
    //await refreshProducts();
    // And you need to change state to make it rendering
    setProducts([...products, {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }])
  };

  const onAddProductToBuy = (product) => {
    console.log("onAddProductToBuy: ", product);
    setProductsToBuy([...productsToBuy, product]);
  };

  const onRemoveProductFromCart = (index) => {
    if (index > -1) {
      productsToBuy.splice(index, 1);
      setProductsToBuy([...productsToBuy]);
    }
  };

  //remove product from firestore
  const onDeleteProduct = async (productId) => {
    console.log("onDeleteProduct: ", productId);
    await productsService.removeProduct(productId);
    
    // Same issue here, and I think this is why your web stucks some frames when you delete a product
    //await refreshProducts();

    // Try to change state to make it re-render rather than re-read the database
    setProducts(products.filter((p) => p.id !== productId));
  };

  //update product in firestore
  const onUpdateProduct = async (productId, product) => {
    console.log("onUpdateProduct: ", productId, product);
    await productsService.updateProduct(productId, product);

    // Same here
    await refreshProducts();
  };

  const onDeleteAllProducts = async () => {
    for (const product of products) {
      await productsService.removeProduct(product.id);
    }
    await refreshProducts();
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>Firestore Shopping Site</h1>
          <ProductsList
            products={products}
            onAddProductToBuy={onAddProductToBuy}
            onDeleteProduct={onDeleteProduct}
            onUpdateProduct={onUpdateProduct}
          />
          <CreateProductForm
            onAddProduct={onAddProduct}
            onRemoveAllProducts={onDeleteAllProducts}
          />
        </div>
        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart
            productsToBuy={productsToBuy}
            onRemoveProductFromCart={onRemoveProductFromCart}
          />
        </div>
      </div>
    </div>
  );
}
