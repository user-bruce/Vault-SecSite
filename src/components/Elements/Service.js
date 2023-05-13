import React from "react";
import styled from "styled-components";

export default function Service({ serviceName, description }) {
  return (
    <ServiceInner>
      <img src="" />
      <ServiceName>{productName}</ServiceName>
      <ServiceDescription>{description}</ServiceDescription>
      <ViewMore>View More</ViewMore>
    </ServiceInner>
  );
}

const ServiceInner = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
  justify-content: flex-start;
`;

const ServiceName = styled.p`
  display: block;
  text-align: center;
  margin: 20px 0px;
  font-weight: 600;
`

const ServiceDescription = styled.p`
  text-align: center;
  line-height: 1.5rem;
  margin: 8px;
  display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const ViewMore = styled.button`
  padding: 12px 25px;
  border: none;
margin: 10px;
`