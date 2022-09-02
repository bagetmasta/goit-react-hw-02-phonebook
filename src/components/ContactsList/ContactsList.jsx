import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ));

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
