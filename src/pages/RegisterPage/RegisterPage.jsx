import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.registerContainer}>
      <PageTitle>Register Your Account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
