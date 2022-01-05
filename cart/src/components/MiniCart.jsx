import React, { useState, useEffect } from "react";
import { currency } from "home/products";
import { cart, clearCart } from "../cart";

const MiniCart = () => {
  const [items, setItems] = useState(null);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((val) => setItems(val?.cartItems ?? []));
  }, []);

  if (!items) return null;
  return (
    <>
      <span
        className="cursor-pointer"
        onClick={() => setShowCart((val) => !val)}
        id="showcart"
      >
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart-icon">
          {items.length}
        </i>
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white"
            style={{
              width: "20rem",
              top: "2rem",
              left: "-18rem",
            }}
          >
            <div
              className="grid gap-3 text-sm text-black"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr 2fr",
              }}
            >
              {items.map((item, idx) => (
                <React.Fragment key={item.id}>
                  <div>{idx + 1}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div>{item.quantity}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div className="text-right">
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className="flex">
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
          </div>
        </>
      )}
    </>
  );
};

export default MiniCart;
