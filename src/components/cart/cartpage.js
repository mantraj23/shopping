import React from "react";
import "./cart.css";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function CartPage({ cart }) {
  console.log(cart);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const [hallNo, setHallNo] = useState("13");
  const [roomNo, setRoomNo] = useState("A408");
  const [name, setName] = useState("Mantra");
  const [block, setBlock] = useState("A");

  const [address, setAddress] = useState({
    name: "Mantra",
    hallNo: "13",
    block: "A",
    roomNo: "A408",
  });

  const handleSubmit = () => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      hallNo: hallNo !== "" ? hallNo : prevAddress.hallNo,
      roomNo: roomNo !== "" ? roomNo : prevAddress.roomNo,
      name: name !== "" ? name : prevAddress.name,
      block: block !== "" ? name : prevAddress.block,
    }));

    if (hallNo !== "") setHallNo("");
    if (roomNo !== "") setRoomNo("");
    if (name !== "") setName("");
    if (block !== "") setBlock("");
  };
  return (
    <div className="fullp">
      <div className="belownavOncart"></div>
      <div className="headcon">
        <div className="leftcon">
          <div className="h3 ycart">Your Cart</div>
          <div className="leftcItem">
            {cart.map((data) => (
              <div className="itemc">
                <div className="prodimgc">
                  <img src={data.image_link} className="prodimg" alt="banner" />
                </div>
                <div className="itemsRight">
                  <div className="productdc">
                    <h3 className="titlec">{data.title}</h3>
                    <h4 className="subtitlec">{data.subtitle}</h4>
                    <h5 className="detailsc">{data.details}</h5>
                    <h3 className="pricec">{data.price}</h3>
                  </div>
                  <div className="QuantityS">
                    <button className="btn increB" onClick={handleDecrement}>
                      -
                    </button>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      type="number"
                      min="1"
                      value={quantity}
                      style={{
                        width: "10%",
                        margin: "0 4px 0 4px",
                      }}
                    />
                    <button className="btn increB" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightcon">
          <div className="h3 ycart">Where to get?</div>
          <div className="addres">
            <div className="address-container">
              <div className="address-title">Address Details</div>
              <div className="address-detail">Name: {address.name}</div>
              <div className="address-detail">Hall No: {address.hallNo}</div>
              <div className="address-detail">Block : {address.block}</div>
              <div className="address-detail">Room No: {address.roomNo}</div>
            </div>
            <div className="newaddrs">
              <h4 className="h4 ycart">On a new address? Change it below:</h4>
              <div className="address-entry-container">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Hall No"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setHallNo(e.target.value)}
                />
                <TextField
                  label="Block"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setBlock(e.target.value)}
                />
                <TextField
                  label="Room No"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={(e) => setRoomNo(e.target.value)}
                />
                <button className="btn changeaddr" onClick={handleSubmit}>
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
