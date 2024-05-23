import React, { useState } from "react";
import "../components_css/togglebox.css";
import { orderData } from "../data/categorydata";

const ToggleBox = ({ products }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="product-toggle-box">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Your orders
        </button>
        <button
          className={`toggle-button ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Your Listings
        </button>
      </div>
      <div className="toggle-content">
        {activeTab === "tab1" && (
          <div className="orderc">
            {orderData.map((product) => (
              <div key={product.id} className="product-card">
                <div className="imagep">
                  <img
                    src={product.image_link}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="pdet">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-subtitle">{product.subtitle}</p>
                  <p className="product-price">{product.price}</p>
                  <p className="product-details">{product.details}</p>
                  <p className="product-date">
                    <strong>Delivered on:</strong> {product.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            {orderData.map((product) => (
              <div key={product.id} className="lisdet">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">{product.price}</p>
                <p className="product-details">{product.details}</p>
                <p className="product-date">
                  <strong>Date:</strong> {product.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleBox;
