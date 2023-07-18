import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";

import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsNumber,
  Button,
} from './ContactList.styled';

export const ContactList = () => {
  // Отримуємо список контактів
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  // Видалення контакту
  const handleContactDelete = id => dispatch(deleteContact(id));

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <AiOutlinePhone color="rgb(73, 136, 195)" />
          <ContactsName>
            {name}:<ContactsNumber>{number}</ContactsNumber>
          </ContactsName>
          <Button type="button" onClick={() => handleContactDelete(id)}>
            Delete <AiOutlineUserDelete align-self="center" />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};