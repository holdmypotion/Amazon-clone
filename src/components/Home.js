import React from "react";
import Banner from "./header.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={Banner} alt="Banner" />
    </div>
  );
}

export default Home;
