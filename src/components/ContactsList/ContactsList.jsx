import PropTypes from 'prop-types';
import { Button } from '../ContactsList';

export const ContactsList = ({ contacts, onDeleteContact }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </li>
  ));

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
