import { useState } from 'react';
import { CheckboxWrap, Checkbox, CheckboxTitle } from './StyledComponent';
import PropTypes from 'prop-types';

export default function LoadInfinityControl({ onCheckChange }) {
  const [isInfinityLoad, setInfinityLoad] = useState(false);

  const handleCheckbox = e => {
    const { checked } = e.target;
    setInfinityLoad(checked);
    onCheckChange(checked);
  };
  return (
    <CheckboxWrap>
      <CheckboxTitle>use infinity scroll:</CheckboxTitle>
      <Checkbox
        type="checkbox"
        checked={isInfinityLoad}
        onChange={handleCheckbox}
      />
    </CheckboxWrap>
  );
}

LoadInfinityControl.propTypes = {
  onCheckChange: PropTypes.func.isRequired,
};
