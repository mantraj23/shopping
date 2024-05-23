import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { coolerData, mattressData, cycleData,applianceData, furnitureData} from "../../data/bannerdata";
import { Box, styled } from "@mui/material";
import "../homecss/banner.css";
import { Link } from "react-router-dom";
const Bar = styled(Box)`
  margin: 4vh auto 4vh auto;
  justify-content: space-between;
  background-color: #fff;
  padding: auto;
  text-align: center;
  overflow: hidden;
`;

const ProductBox = styled(Box)`
  padding: auto;
  padding-top: 2vh;
  text-align: center;
  background-color: white;
  margin: 0 10px;
  max-height: 48vh;
`;

const Title = styled("h1")`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1vh;
  display: block;
`;

const ProductDetail = styled(Box)``;

const responsiveis = {
  desktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 6,
  },
  mini_desk: {
    breakpoint: { max: 1400, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  min_tablet: {
    breakpoint: { max: 800, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 464 },
    items: 2,
  },
  mobilesm: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const renderCarousel = (title, data) => {
  
  return (
      <Bar>
        <Title>{title}</Title>
        <Carousel
          responsive={responsiveis}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          swipeable={false}
          draggable={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {data.map((data) => (
            <Link to= {`/productview/${data.type}/${data.id}`}>
              <ProductBox
                sx={{
                  border: 0.5,
                  borderRadius: "10%",
                  borderColor: "#B1AAAE",
                }}
              >
                <img
                  src={data.image_link}
                  alt="banner"
                  style={{
                    width: "75%",
                    height: "30vh",
                    margin: "auto",
                  }}
                />
                <h2 style= {{fontWeight:"bold"}} >{data.title}</h2>
                <h3 >{data.subtitle}</h3>
                <h3 style= {{fontWeight:"700"}} >{data.price}</h3>
              </ProductBox>
            </Link>
          ))}
        </Carousel>
      </Bar>
  );
}



export default function Banner() {
  return (
    <>
      {renderCarousel("Coolers", coolerData)}
      {renderCarousel("Mattresses", mattressData)}
      {renderCarousel("Cycles", cycleData)}
      {renderCarousel("Appliances", applianceData)}
      {renderCarousel("Furniture", furnitureData)}
    </>
  );
}