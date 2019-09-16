import styled from 'styled-components';
import * as common from '../config';

const Label = styled.label`
  display: inline-block;
  padding: ${common.PADDING};
  font-weight: 100;
  color: #212529;
  &:focus-within {
    font-style: italic;
  }
`;

export { Label };