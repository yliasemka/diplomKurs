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
  return (
    <StyledSubscribe>
      <Container>
        <SubscribeBlock>
          <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
          <SubscribeSubtitle>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </SubscribeSubtitle>
          <SubscribeForm>
            <SubscribeInput placeholder="Your email adress" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeBlock>
      </Container>
    </StyledSubscribe>
  );
};

export default Subscribe;
