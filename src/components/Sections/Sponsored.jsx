import React from "react";
import styled from "styled-components";
import Company1 from "../../assets/img/sponsored1.png";
import Company2 from "../../assets/img/sponsored2.png";
import Company3 from "../../assets/img/sponsored3.png";
import Company4 from "../../assets/img/sponsored4.png";
import Company5 from "../../assets/img/sponsored5.png";

export default function Sponsored() {
  const sponsoredCompanies = [
    {
      id:1,
      company: "BBB Online",
      image: Company1,
    },
    {
      id:2,
      company: "ASIS International",
      image: Company2,
    },
    {
      id:3,
      company: "ALOA Associated Locksmiths",
      image: Company3,
    },
    {
      id:4,
      company: "American Hotel and Lodging Association",
      image: Company4,
    },
    {
      id:5,
      company: "SAVTA Safe and Vault Association",
      image: Company5,
    },
  ];

  return (
    <Wrapper>
      <SponsoredRow>
        <SponsoredTitle>We are proud sponsors of</SponsoredTitle>
        <SponsoredCompaniesRow>
          {sponsoredCompanies.map((company) => (
            <SponsoredCompany key={company.id}>
              <Img
                className="radius8"
                src={company.image}
                alt="company image"
                style={{
                  width: "110px",
                  height: "115px",
                  marginRight: "20px",
                }}
              />
              <SponsoredCompanyText>{company.company}</SponsoredCompanyText>
            </SponsoredCompany>
          ))}
        </SponsoredCompaniesRow>
      </SponsoredRow>
    </Wrapper>
  );
}

const Img = styled.img`
  border-radius: 5px;
`;

const SponsoredCompanyText = styled.span`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: clean;
`;

const SponsoredCompaniesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;

  @media (max-width: 560px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SponsoredCompany = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 560px){
    margin: 15px 0;
  }
`;

const Wrapper = styled.section`
  width: 100%;
`;

const SponsoredRow = styled.div`
  margin: 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 560px){
    display: flex;
    flex-direction: column;
  }
`;

const SponsoredTitle = styled.h1`
  text-align: center;
`;
