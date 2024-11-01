import { useState } from "react";
import emailjs from "emailjs-com"; 
import {
  StyledSubscribe,
  SubscribeTitle,
  SubscribeSubtitle,
  SubscribeInput,
  SubscribeButton,
  SubscribeForm,
  Container,
  SubscribeBlock,
} from "./style";

const Subscribe = () => {

  const [email, setEmail] = useState("");


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubscribe = (e: any) => {
    e.preventDefault(); 
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    const templateParams = {
      email: email, 
    };

    emailjs.send("service_794hhnv", "template_nmldygv", templateParams, "K2XIpISZF-iEyglVI")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Subscription successful!"); 
      }, (error) => {
        console.log("FAILED...", error);
        alert("There was a problem with your subscription.");
      });
  };

  return (
    <StyledSubscribe>
      <Container>
        <SubscribeBlock>
          <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
          <SubscribeSubtitle>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </SubscribeSubtitle>
          <SubscribeForm onSubmit={handleSubscribe}>
            <SubscribeInput
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleInputChange}
              required
            />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeBlock>
      </Container>
    </StyledSubscribe>
  );
};

export default Subscribe;
