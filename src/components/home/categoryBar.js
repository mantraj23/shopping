import React from "react";
import "../homecss/categoryBar.css";
import { categoryData } from "../../data/categorydata";
import { Typography } from "@mui/material";

export default function CategoryBar() {
  return (
    <>
      <div className="bar">
        {categoryData.map((data) => (
          <div className="productbox">
            <a href="/">
              <img  className="categoryimage" src={data.link} alt="nav" />
              <Typography className="text"> {data.text} </Typography>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
