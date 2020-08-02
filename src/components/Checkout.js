import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        alt="Ad Banner"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* List out all of the checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
