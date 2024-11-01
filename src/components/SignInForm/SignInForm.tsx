import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignInButton, SignInInput, StyledSignInForm } from "./styles";
import { useState } from "react";
import ErrorModal from "../Error/Error";

export const SignInForm = () => {
  const navigate = useNavigate();

  const [checkError, setCheckError] = useState<{ code: string; message: string } | null>(null);

  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate(routes.ACCOUNT);
      })
      .catch((error) => {
        setCheckError({ code: error.code, message: error.message });
      });
  };

  const closeErrorModal = () => {
    setCheckError(null)
  }
  return (
    <>
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <SignInInput
        type="email"
        {...register("email")}
        placeholder="Enter your email"
        required
      />
      <SignInInput
        required
        type="password"
        {...register("password")}
        placeholder="Enter your password"
      />
      <SignInButton type="submit">Sign In</SignInButton>
    </StyledSignInForm>
    <ErrorModal error={checkError} onClose={closeErrorModal} />
    </>
   
  );
};
