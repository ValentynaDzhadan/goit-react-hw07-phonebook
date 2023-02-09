import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations.contacts';
import { useState } from 'react';

export const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const stateMap = { name: setName, phone: setPhone };

  const onHandleChange = e => {
    const { name, value } = e.target;
    stateMap[name](value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const isNameExist = contacts.find(el => el.name === name);
    if (isNameExist) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: name,
        phone: phone,
      };
      dispatch(addContact(newContact));
    }
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        <span> Name </span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onHandleChange}
          required
        />
      </label>

      <label>
        <span> Phone </span>
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onHandleChange}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
