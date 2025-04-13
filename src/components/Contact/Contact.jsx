import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactCard}>
      <p className={css.contactInfo}>
        <FaUser className={css.icon} />
        {contact.name}
      </p>

      <p className={css.contactInfo}>
        <FaPhone className={css.icon} />
        {contact.number}
      </p>
      <button className={css.btn} type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
