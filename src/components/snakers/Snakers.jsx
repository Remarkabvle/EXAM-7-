import React from "react";
import sneakerImage from "../../assets/image.png";
import "./Snakers.scss";

function Snakers() {
  return (
    <div>
      <div className="banner">
        <div className="container banner">
          <div className="text-content">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <a href="#" className="shop-now">
              SHOP NOW
            </a>
          </div>
          <div className="image-content">
            <img src={sneakerImage} alt="Adidas Men Running Sneakers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snakers;
