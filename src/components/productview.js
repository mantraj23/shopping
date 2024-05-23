import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components_css/productview.css";
import { renderCarousel } from "./home/banner.js";
import ChatDialog from "./chat.js";
import {
  coolerData,
  applianceData,
  furnitureData,
  cycleData,
  mattressData,
} from "../data/bannerdata";

const ProductView = ({ addToCart }) => {

  const [openChat, setOpenChat] = useState(false);

  const handleOpenChat = () => {
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
  };
  const { type, id } = useParams();
  const productId = parseInt(id);

  console.log(type);

  let productData;

  switch (type) {
    case "appliance":
      productData = applianceData;
      break;
    case "furniture":
      productData = furnitureData;
      break;
    case "cooler":
      productData = coolerData;
      break;
    case "mattress":
      productData = mattressData;
      break;
    case "cycle":
      productData = cycleData;
      break;
    default:
      productData = [];
      break;
  }

  const product = productData.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.image_link);


  return (
    <>
      <div className="belownav"></div>
      <div>
        <div className="headc">
          <div className="leftc">
            <img src={product.image_link} className="image" alt="photo" />
          </div>
          <div className="rightc">
            <div>
              <h3 className="h3 typeofa">Type: {product.type}</h3>
              <h1 className="h1 titlea">Brand: {product.title}</h1>
              <h3 className="h3 subtitle">Model: {product.subtitle}</h3>
              <h1 className="h1 price">Price: {product.price}</h1>
              <h3 className=" h4 headd">Product Details: {product.details}</h3>
            </div>
            <div className="butn">
              <div className="mybtn">
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="btn addto"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mybtn">
                <button className="btn addto"  onClick={handleOpenChat}>Start chat with owner</button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto">
          {renderCarousel("More products related to this", productData)}
        </div>
      </div>
      <ChatDialog open={openChat} setopen = {setOpenChat}/>
    </>
  );
};

export default ProductView;
