import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
