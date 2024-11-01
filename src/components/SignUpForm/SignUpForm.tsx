import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { setUser, setUserName } from "../../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpButton, SignUpInput, StyledSignUpForm } from "./styles";
import { useState } from "react";
import ErrorModal from "../Error/Error";

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [checkError, setCheckError] = useState<{ code: string; message: string } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
  const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((userCredential: { user: { email: any; }; }) => {
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(data.name));
        navigate(routes.SIGNIN);
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
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpInput
        type="text"
        {...register("name")}
        placeholder="Enter your name"
        required
      />
      <SignUpInput
        type="email"
        {...register("email")}
        placeholder="Enter your email"
        required
      />
      <SignUpInput
        type="password"
        {...register("password")}
        placeholder="Enter your password"
        required
      />
      <SignUpButton type="submit">Sign Up</SignUpButton>
    </StyledSignUpForm>
      <ErrorModal error={checkError} onClose={closeErrorModal} />
    </>
    
  );
};
