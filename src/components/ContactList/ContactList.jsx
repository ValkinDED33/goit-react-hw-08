import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.contactListWrapper}>
      {contacts.length === 0 ? (
        <p className={css.noContactsMessage}>No contacts available</p>
      ) : (
        <ul className={css.list}>
          {contacts.map((contact) => {
            return (
              <li key={contact.id} className={css.item}>
                <Contact contact={contact} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
