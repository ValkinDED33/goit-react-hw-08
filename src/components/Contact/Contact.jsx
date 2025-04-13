import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Видалити
      </button>
    </li>
  );
};

export default Contact;
