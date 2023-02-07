import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/filter/slice.filter';

export const Filter = () => {
  const value = useSelector(state => state.filter.search);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilterAction(value));
  };
  return (
    <label>
      <span> Find contacts by name </span>
      <input
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </label>
  );
};
