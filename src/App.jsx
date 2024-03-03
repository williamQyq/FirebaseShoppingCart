import "./App.css";

import { useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const onAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.at(-1).id + 1,
        name: `Product ${products.length + 1}`,
        price: 400,
        image: "https://via.placeholder.com/150",
      },
    ]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>Basic Shopping Site</h1>

          <ProductsList products={products} />

          <button className="btn btn-primary" onClick={onAddProduct}>
            Add Product
          </button>
        </div>
        {/* col-8 */}

        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart products={products} />
        </div>
      </div>
    </div>
  );
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [
//         {
//           id: 1,
//           name: "Product 1",
//           price: 100,
//           image: "https://via.placeholder.com/150",
//         },
//         {
//           id: 2,
//           name: "Product 2",
//           price: 200,
//           image: "https://via.placeholder.com/150",
//         },
//         {
//           id: 3,
//           name: "Product 3",
//           price: 300,
//           image: "https://via.placeholder.com/150",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Basic Shopping Site</h1>

//         <h2>Products</h2>
//         <div className="products">
//           {this.state.products.map((product) => (
//             <div key={product.id} className="product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Price: {product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
