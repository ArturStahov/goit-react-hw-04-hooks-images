import { useState } from 'react';
import { Form, Input } from './StyledComponent';
import PropTypes from 'prop-types';

export default function FormSearch({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handlerForm = e => {
    e.preventDefault();

    onSearch(inputValue);
    setInputValue('');
  };

  return (
    <Form onSubmit={handlerForm}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Search images and photos"
      />
    </Form>
  );
}

FormSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
