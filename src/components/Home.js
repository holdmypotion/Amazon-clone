import React from "react";
import Product from "./Product";
import Banner from "./banner.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={Banner} alt="Banner" />

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />

        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />
        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />
        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />{" "}
      </div>

      <div className="home__row">
        {/* Product id, title, price, rating, image */}
        <Product
          id="124545"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
        />{" "}
      </div>
    </div>
  );
};

export default Home;
