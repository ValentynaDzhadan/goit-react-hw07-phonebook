import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations.contacts';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.filter.search);
  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [search, dispatch]);

  const { items, isLoading, error } = useSelector(state => state.contacts);

  if (error) return <p>Error</p>;

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm contacts={items} />
      <h2>Contacts</h2>
      <Filter></Filter>

      {isLoading ? <Loader /> : <ContactList contacts={items} />}
    </>
  );
};
