import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledSubscribe = styled.section`
  max-width: 1920px;
  width: 100%;

  margin-top: 30px;
  padding: 10px;
`;

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const SubscribeBlock = styled.div`
  padding: 64px;
  border-radius: 30px;
  background-color: ${Colors.LIGHTBROWN};
  box-shadow: 0 0 10px ${Colors.GREY};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.TABLET} {
    padding: 54px;
  }
  ${media.PHONE} {
    padding: 44px;
  }
`;

const SubscribeTitle = styled.h2`
  ${typography.H3};
  margin-bottom: 15px;
`;

const SubscribeSubtitle = styled.p`
  margin-bottom: 52px;
`;

const SubscribeForm = styled.div`
  max-width: 642px;
  width: 100%;
  padding: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: none;
  background-color: white;
  box-shadow: 0 0 10px ${Colors.GREY};
  border-radius: 30px;
`;

const SubscribeInput = styled.input`
  max-width: 845px;
  width: 100%;
  ${typography.input};

  max-width: 542px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;
  border: none;
  border-radius: 20px;
`;

const SubscribeButton = styled.button`
  ${typography.bodytext};
  text-transform: uppercase;

  padding: 10px 25px;

  border: none;
  border-radius: 20px;

  color: white;
  background-color: ${Colors.ORANGE};
`;

export {
  SubscribeButton,
  SubscribeInput,
  SubscribeForm,
  SubscribeSubtitle,
  SubscribeTitle,
  StyledSubscribe,
  Container,
  SubscribeBlock,
};
