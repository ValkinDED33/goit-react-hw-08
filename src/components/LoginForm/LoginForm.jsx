import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    console.log(values);

    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Successfully logged in");
      actions.resetForm();
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <div className={css.field}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={css.input}
              autoFocus
              aria-describedby="emailError"
              autoComplete="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              id="emailError"
              className={css.error}
            />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className={css.input}
              aria-describedby="passwordError"
              autoComplete="current-password"
            />
            <ErrorMessage
              name="password"
              component="div"
              id="passwordError"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button} disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
