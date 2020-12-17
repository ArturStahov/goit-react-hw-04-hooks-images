import styled from 'styled-components';

const ButtonScrollsTop = styled.a`
  display: block;
  position: fixed;
  right: 5px;
  bottom: 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover .icon {
    color: green;
  }
`;

export { ButtonScrollsTop };
