import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/slice.contacts';

export const ContactList = () => {
  const myContacts = useSelector(state => state.contacts.contactsData);
  const filter = useSelector(state => state.filter.search);
  const dispatch = useDispatch();

  const filteredConacts = useMemo(() => {
    return myContacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [myContacts, filter]);

  return (
    <ul>
      {filteredConacts.map(el => (
        <li key={el.id}>
          <span>
            {el.name} : {el.number}
          </span>
          <button
            onClick={() => {
              dispatch(removeContact(el.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
