import React from "react";
import CategoryBar from "./home/categoryBar";
import { Fragment } from "react";
import Banner from "./home/banner.js";
import { Box, } from "@mui/material";
import '../components_css/homepage.css'

export default function Homepage() {
  return (
    <>
      <div className="belownav"></div>
      <CategoryBar />
      <Banner/>
    </>
  );
}
