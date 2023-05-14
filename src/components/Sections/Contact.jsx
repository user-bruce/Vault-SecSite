import React from "react";
import styled from "styled-components";
// Assets

export default function Contact() {
  //To include the icon parameter to the social item
  const socials = [
    {
      id: 1,
      platform: "twitter",
      name: "@allied_safe",
    },
    {
      id: 2,
      platform: "facebook",
      name: "allied_safe",
    },
    {
      id: 3,
      platform: "instagram",
      name: "@allied_safe",
    },
    {
      id: 4,
      platform: "phone",
      name: "+263 775620221",
    },
    {
      id: 5,
      platform: "email",
      name: "info@alliedsafe.com",
    },
    {
      id: 6,
      platform: "location",
      name: "142 Ganges Dr Belvedere, Harare",
    },
  ];

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <br />
            <p style={{ fontSize: 16 }}>
              Send us a message about any enquiries or services that you may
              need from us.
              <br />
              <br />
              We'll respond to you swifly.
            </p>
          </HeaderInfo>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ContactDetailsInformation>
              <div style={{display: "flex",paddingBottom: "50px", alignItems:"center",flexDirection:"column",justifyContent:"center"}} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Form>
                  <label className="font13">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="font20 extraBold"
                  />
                  <label className="font13">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="font20 extraBold"
                  />
                  <label className="font13">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="font20 extraBold"
                  />
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="font20 extraBold"
                  />
                </Form>
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </SumbitWrapper>
              </div>
              <ContactDetailsContainer>
                <DetailsTitle>You can also catch us here</DetailsTitle>
                <DetailsContent>
                  {socials.map((social) => (
                    // Make social item a grid and insert icon next to name
                    <SocialItem key={social.id}>{social.name}</SocialItem>
                  ))}
                </DetailsContent>
              </ContactDetailsContainer>
            </ContactDetailsInformation>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const ContactDetailsContainer = styled.div`
  display: flex;
  margin: 10px 20px 0px 120px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 560px){
    margin-left: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1060px){
    margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const ContactDetailsInformation = styled.div`
  display: flex;
  paddingbottom: 30px;
  alignitems: flex-start;
  justifycontent: flex-start;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    justify-content_center;
  }

  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
    justify-content_center;
  }
`;

const SocialItem = styled.a`
  margin-left: 40px;
  margin-bottom: 12px;
  cursor: pointer;
  color: black;

  @media (max-width: 560px){
    margin-left: 0;
  }
`;

const DetailsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const DetailsContent = styled.div`
  display: flex;
  color: black;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 1060px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #cb3f3a;
  background-color: #cb3f3a;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: black;
    border: 1px solid black;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
