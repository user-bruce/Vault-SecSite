import React from "react";
import styled from "styled-components";
import SafeIcon from "../../assets/img/safeIcon.png";

export default function Product({ productName, services }) {
  return (
    <ProductInner>
      <ProductOverlap>
        <ProductName>{productName}</ProductName>
        <ServicesContainer>
          {services.map((service) => (
            <ServiceItem key={service.id}>
              <Img
                className="radius8"
                src={SafeIcon}
                alt="office"
                style={{
                  zIndex: "9 !important",
                  marginRight: "20px",
                }}
              />
              <a href="./">{service.name}</a>
            </ServiceItem>
          ))}
        </ServicesContainer>
      </ProductOverlap>
    </ProductInner>
  );
}

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
`;

const ProductOverlap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const ServiceItem = styled.div`
display: grid;
grid-template-columns: 1fr 8fr;
margin: 5px 0px;
`;

const ProductInner = styled.div`
  display: flex;
  min-height: 400px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
  justify-content: flex-start;
`;

const ProductName = styled.p`
  display: block;
  text-align: center;
  margin: 20px 0px;
  font-size: 24px;
  font-weight: 600;
`;
