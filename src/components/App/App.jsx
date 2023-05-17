import { RegisterForm } from "../RegisterForm/RegisterForm";
import { FormCard, FormTitle } from "./App.styled";

export const App = () => {
  return (
    <FormCard>
      <FormTitle>Registration Form</FormTitle>
      <RegisterForm />
    </FormCard>
  );
};
