import { Button as MUIButton, ButtonProps } from '@mui/material';
import styled from 'styled-components';


const StyledButton = styled(MUIButton)`
  margin: 5px;
  display: block;
  width: 100%;
`;

const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton 
    {...props} 
    sx={{
      backgroundColor: '#ac8150',
      opacity: 0.8,
      color: 'inherit', 
      textTransform: 'none', 
      fontFamily: '"Caveat", cursive',
      fontWeight: 500,
      fontSize: 24,
      margin: '10px 0',
      border: '1px solid #ac8150',
      borderRadius: '8px',

      '&:hover': {
        color: '#ac8150', 
        backgroundColor: 'transparent',
      },
    }} 
  />
);

export default Button;