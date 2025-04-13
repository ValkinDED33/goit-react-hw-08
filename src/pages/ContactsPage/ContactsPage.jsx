import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/loader/Loader";
import Error from "../../components/Error/Error";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading) return <Loader>Loading contacts...</Loader>;
    if (isError) return <Error>There was an error loading the contacts.</Error>;
    if (contacts.length === 0)
      return <p>No contacts found. Add some contacts!</p>;
    return <ContactList />;
  };

  return (
    <div>
      <h1>Your Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {renderContent()}
    </div>
  );
}
