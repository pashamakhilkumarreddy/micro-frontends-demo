import React, { useState, useEffect } from "react";
import { currency } from "home/products";
import { cart, clearCart } from "../cart";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );
  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div id="grand_total" className="text-right">
        Total: {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
      </div>
      {!!items.length && (
        <div className="flex mb-10">
          <div className="flex-grow flex justify-between">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              id="clearcart"
              className="bg-white border bg-green-800 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
