import { ModalContent, ModalOverlay, CloseButton } from "./styles";

interface ErrorProps {
    error: {
      code: string;
      message: string;
    } | null;
    onClose: () => void;
  }

  const ErrorModal: React.FC<ErrorProps> = ({ error, onClose }) => {
    if (!error) return null;
  
    return (
      <ModalOverlay>
        <ModalContent>
          <h2 style={{marginBottom: "10px"}}>Error {error.code}</h2>
          <p style={{marginBottom: "10px"}}>{error.message}</p>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalOverlay>
    );
  };
  
  export default ErrorModal;