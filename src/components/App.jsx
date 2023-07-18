import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import {
  Section,
  TitlePhonebook,
  ContactContainer,
  TitleContact,
} from './App.styled';

export function App() {
  const dispatch = useDispatch();

  // getting a list of contacts from the state
  const contacts = useSelector(selectContacts);
  // getting isLoading value from the state
  const isLoading = useSelector(selectIsLoading);
  // getting error value from the state
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
    <TitlePhonebook>Phonebook</TitlePhonebook>
    <ContactForm  />
   



    <ContactContainer>
    {contacts.length > 0 &&  <TitleContact>Contact</TitleContact>}
    
{isLoading && !error && <Loader />}
{contacts.length > 0 ? (<Filter />) : (<p>YOUR PHONEBOOK IS EMPTY</p>
)}

{error && error}

{contacts.length > 0 && <ContactList />}
   
    </ContactContainer>
  </Section>
  );
}
