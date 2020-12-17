import React from 'react';
import { ButtonScrollsTop } from './StyledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default function ButtonScrollTop() {
  return (
    <ButtonScrollsTop href="#page-header">
      <FontAwesomeIcon
        className="icon"
        icon={faChevronCircleUp}
        color="grey"
        size="3x"
      />
    </ButtonScrollsTop>
  );
}
