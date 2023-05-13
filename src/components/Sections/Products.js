import React from "react";
import styled from "styled-components";
import Product from "../Elements/Product";
import CardsTitle from "../Elements/CardsTitle";


export default function Products() {

  //Products list
  const products = [
    {
      id:1,
      title: "Home-General Use",
      services: [
        {name:"composite safes",id:1},
        {name:"fire-resistant safes",id:2},
        {name:"fire-resistant file cabinets", id:3},
        {name:"insulated vault doors",id:4},
        {name:"floor safes", id:5},
        {name:"media safes/cabinets",id:6},
        {name:"gun safes",id:7},
        {name:"wall safes", id:8}
      ],
      image: ""
    },
    {
      id: 2,
      title: "Commercial",
      services: [
        {name:"composite safes",id:1},
        {name:"composite TL-15 & TL -30",id:2},
        {name:"composite TRTL-30x6",id:3},
        {name:"depository safes",id:4},
        {name:"fire-resistant safes",id:5},
        {name:"fire-resistant file cabinets",id:6},
        {name:"insulated vault doors",id:7},
        {name:"under counter safes",id:8},
        {name:"media safes/cabinets",id:9},
        {nam:"cash and coin dispenser",id:10}
      ],
      image: ""
    },
    {
      id:3,
      title: "Hospitality",
      services: [
        {name:"hotel safes",id:1},
        {name:"under counter safes",id:2},
        {name:"electronic door locks",id:3},
        {name:"depository safes",id:4},
        {name:"safe deposit boxes",id:5},
        {name:"media safes/cabinets",id:6}
      ],
      image: ""
    },
    {
      id: 4,
      title: "Financial institutions",
      services: [
        {name:"safe deposit boxes",id:1},
        {name:"composite TL-15 & TL -30",id:2},
        {name:"composite TRTL-30x6",id:3},
        {name:"vault doors",id:4},
        {name:"night deposit",id:5},
        {name:"drive up",id:6},
        {name:"deal drawer",id:7},
      ],
      image: ""
    }
  ]

  return (
    <Wrapper id="products">
      <div className="whiteBg" style={{ padding: "60px 0px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{ textAlign: "center" }}>Products and Services</h1>
          </HeaderInfo>
          <ProductsContainer>
            <CardsTitle title={"Discover our Products"}/>
            <ProductsWrapper>
              {products.map(product => (
                <Product key={product.id} productName={product.title} services={product.services} image={product.image} />
              ))}
            </ProductsWrapper>
          </ProductsContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ProductsContainer = styled.div`
  
`;



const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;




