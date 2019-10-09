import styled from 'styled-components';
import * as common from '../../theme';

const Label = styled.label`
  display: inline-block;
  padding: ${common.PADDING};
  font-weight: 100;
  color: #212529;
  &:focus-within {
		
  }
`;

export { Label };