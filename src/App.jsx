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
    //product service
    onGetProducts();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGetProducts = () => {
    //get products from firestore and sort by created time
    productsService.getProducts().then((products) => {
      setProducts(products);
    });
  };
  //add product to firestore
  const onAddProduct = (product) => {
    productsService.addProduct(product).then(() => {
      setProducts([]);
      onGetProducts();
    });
  };

  const onAddProductToBuy = (product) => {
    setProductsToBuy([...productsToBuy, product]);
  };

  const onRemoveProductFromCart = (index) => {
    if (index > -1) {
      productsToBuy.splice(index, 1);
      setProductsToBuy([...productsToBuy]);
    }
  };
  //remove product from firestore
  const onDeleteProduct = (productId) => {
    productsService.removeProduct(productId).then(() => {
      setProducts([]);
      onGetProducts();
    });
  };
  //update product in firestore
  const onUpdateProduct = (productId, product) => {
    productsService.updateProduct(productId, product).then(() => {
      onGetProducts();
    });
  };
  const onDeleteAllProducts = () => {
    const deletePromises = products.map((product) =>
      productsService.removeProduct(product.id)
    );
    //update products after delete all products
    Promise.all(deletePromises).then(() => {
      setProducts([]);
    });
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
