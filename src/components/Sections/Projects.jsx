import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import AboutImage from "../../assets/img/sfe.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="lightBg" style={{ padding: "60px 0px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{ textAlign: "center" }}>
              About Us
            </h1>
          </HeaderInfo>
          <AboutGrid>
            <Img
              style={{  height: "auto",width: "350px" }}
              className="radius8"
              src={AboutImage}
              alt="about"
            />
            
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                // className="row"
                style={{
                  margin: "0 15px",
                  lineHeight: "1.5em",
                  height: "10em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"flex-start",
                  flexDirection: "column"
                  
              
                }}
              >
                <p style={{textAlign: "center", marginBottom:"45px", width:"100%", fontSize: "16", fontWeight: "600" }}>
                  ALLIED SAFE & VOLT CO.
                </p>
                <p style={{textAlign: "center"}}>
                  To get into the system, a user needs to log in. To do that,
                  they need to create an account. You will be creating a
                  dual-use login screen that will allow a user to either log in
                  or sign up for a new account.
                </p>
              </div>
              <div className="row flexCenter">
                <div style={{ margin: "30px 0 40px 0px", width: "200px" }}>
                  <FullButton
                    title="Read More"
                    action={() => alert("clicked")}
                  />
                </div>
              </div>
            </div>
          </AboutGrid>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  padding: 15px 25px;
  margin: 25px 0px;

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }
`;
