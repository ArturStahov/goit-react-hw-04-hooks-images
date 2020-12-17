import React from 'react';
import { Button } from './StyledComponent';
import PropTypes from 'prop-types';

export default function ButtonLoadMore({ onLoad }) {
  return (
    <Button type="button" onClick={() => onLoad()}>
      LoadMore
    </Button>
  );
}

ButtonLoadMore.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
