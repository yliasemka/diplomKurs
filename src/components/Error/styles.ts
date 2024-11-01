import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px ${Colors.BLACK};
  text-align: center;
  m
`;

export const CloseButton = styled.button`
  background: ${Colors.RED};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${Colors.ORANGE};
  }
`;