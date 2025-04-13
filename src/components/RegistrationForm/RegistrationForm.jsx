import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("User successfully registered!");
      actions.resetForm();
    } catch (error) {
      toast.error("Registration failed! Check your data.");
      console.error("Registration error:", error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .transform((value) => value.trim())
      .min(2, "Name is too short!")
      .required("Name is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required!"),
  });

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Register</h2>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} autoComplete="off">
            <div className={css.field}>
              <label className={css.label} htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={css.input}
                autoComplete="username"
                autoFocus
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.field}>
              <label className={css.label} htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={css.input}
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
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
                autoComplete="new-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
