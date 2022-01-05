import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { currency, getProducts } from "../services/products";
import { addToCart, useIsLoggedIn } from "cart/cart";

const Home = () => {
  const loggedIn = useIsLoggedIn();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="my-10 grid grid-cols-2 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              decoding="async"
              loading="lazy"
            />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>
                <span>{product.name}</span>
              </Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
