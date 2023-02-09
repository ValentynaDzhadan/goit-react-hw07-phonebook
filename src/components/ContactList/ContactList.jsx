import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.contacts';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          <span>
            {el.name} : {el.phone}
          </span>
          <button
            onClick={() => {
              dispatch(deleteContact(el.id));
            }}
          >
            Delete
          </button>{' '}
        </li>
      ))}
    </ul>
  );
};
