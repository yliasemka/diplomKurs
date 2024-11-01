import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignInButton, SignInInput, StyledSignInForm } from "./styles";

export const SignInForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(routes.ACCOUNT);
      })
      .catch(console.error);
  };
  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <SignInInput
        type="email"
        {...register("email")}
        placeholder="Enter your email"
      />
      <SignInInput
        type="password"
        {...register("password")}
        placeholder="Enter your password"
      />
      <SignInButton type="submit">Sign In</SignInButton>
    </StyledSignInForm>
  );
};
