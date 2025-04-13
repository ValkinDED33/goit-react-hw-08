import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.number().positive().integer().required("Required!"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success(`Successfully added ${values.name}!`))
      .catch(() => toast.error("Error! This didn't work."));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor={nameId} className={css.label}>
              <FaUser className={css.icon} /> Name
            </label>
            <Field type="text" name="name" id={nameId} className={css.input} />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>

          <div className={css.fieldWrapper}>
            <label htmlFor={numberId} className={css.label}>
              <FaPhone className={css.icon} /> Number
            </label>
            <Field
              type="number"
              name="number"
              className={css.input}
              id={numberId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
