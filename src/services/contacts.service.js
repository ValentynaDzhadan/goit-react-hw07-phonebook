import axios from 'axios';

export const getContacts = async search => {
  const { data } = await axios.get(
    'https://63e44c414474903105e95619.mockapi.io/contacts/contacts',
    {
      params: { search },
    }
  );
  return data;
};

export const addContactService = async body => {
  const { data } = await axios.post(
    'https://63e44c414474903105e95619.mockapi.io/contacts/contacts',
    body
  );
  return data;
};

export const deleteContactService = id => {
  return axios.delete(
    'https://63e44c414474903105e95619.mockapi.io/contacts/contacts/' + id
  );
};
