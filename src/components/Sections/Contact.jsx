import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez LocaSport</h1>
            <p className="font13">
              Vous souhaitez réserver un terrain ou poser une question ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
              <br />
              Nous sommes là pour vous aider à trouver le terrain parfait pour votre activité sportive !
            </p>
          </HeaderInfo>

          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nom complet :</label>
                <input type="text" id="fullname" name="fullname" className="font20 extraBold" placeholder="Votre nom et prénom" />

                <label className="font13">Adresse email :</label>
                <input type="email" id="email" name="email" className="font20 extraBold" placeholder="exemple@mail.com" />

                <label className="font13">Type de terrain :</label>
                <input type="text" id="terrain" name="terrain" className="font20 extraBold" placeholder="Football, Basketball, Tennis..." />

                <label className="font13">Votre message :</label>
                <textarea rows="4" cols="50" id="message" name="message" className="font20 extraBold" placeholder="Votre demande ou question..." />
              </Form>

              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Envoyer le message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "100%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="terrain-football" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="terrain-basketball" className="radius6" />
                </ContactImgBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
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
  border: 1px solid #1e90ff;
  background-color: #1e90ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #0066cc;
    border: 1px solid #1e90ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
