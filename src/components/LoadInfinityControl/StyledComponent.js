import styled from 'styled-components';

const CheckboxWrap = styled.label`
  width: max-content;
  display: block;
  margin: 0 auto;
`;
const Checkbox = styled.input`
  width: 17px;
  height: 17px;
`;
const CheckboxTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: green;
  margin-right: 5px;
`;

export { CheckboxWrap, Checkbox, CheckboxTitle };
