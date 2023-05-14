import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "20px 0" }}>
        <div className="container">
          <HeaderInfo>
            <VisionMissionContainer>
              <MissionTitle>
                <MissionBannerDiv></MissionBannerDiv>
                <span
                  style={{
                    padding: "25px 50px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="font18"
                >
                  The Allied Mission
                </span>
              </MissionTitle>
              <VisionMissionWrapper>
                <p className="mission-vision-text font18">
                  To ensure 'peace of mind' for our customers and exceed their
                  security expectations.
                </p>
              </VisionMissionWrapper>
              <MissionTrailing>
                <MissionBannerDiv></MissionBannerDiv>
                <span
                  style={{
                    padding: "25px 50px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="font18"
                >
                  SINCE 1949
                </span>
              </MissionTrailing>
            </VisionMissionContainer>
          </HeaderInfo>
        </div>
        <div className="lightBg">
          <div className="container"></div>
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

const MissionTrailing = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: row;
  color: #cb3f3a;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-left: 20px;

  @media (max-width: 520px) {
    margin-top: 15px;
    margin-left: 0px;
  }
`;

const MissionTitle = styled.div`
  font-weight: 600;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media (max-width: 520px){
    margin-bottom: 15px;
    margin-right:0px;
  }
`;

const MissionBannerDiv = styled.div`
  width: 8px;
  background-color: #cb3f3a;
  height: 70px;
`;

const VisionMissionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 55px;
  position: relative;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const VisionMissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 55px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  justify-content: center;
  max-width: 600px;
`;
