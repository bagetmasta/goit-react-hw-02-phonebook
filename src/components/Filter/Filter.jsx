import PropTypes from 'prop-types';
import { Input } from '../Filter';

export const Filter = ({ onChange }) => {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <Input type="text" onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
