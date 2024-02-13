import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.type === 'warning' ? '#FF7171' : props.type === 'default' ? '#08c7fd' : props.type === 'outlined' ? 'transparent' : '#FFBB00')};
  border: 2px ${props => (props.type === 'yellow' ? '#FFBB00' : props.type === 'warning' ? '#FF7171' : '#08c7fd')} solid;
  color: ${props => (props.type === 'outlined' ? '#08c7fd' : 'white')};
  border-radius: 6px;
  width: ${props => (props.size === 'md' ? '201px' : props.size === 'sm' ? '116px' : props.size === 'amd' ? '77px' : props.size === 'asm' ? '55px' : '318px')};
  height: ${props => (props.size === 'sm' ? '32.66px' : props.size === 'amd' || 'asm' ? '34px' : '45px')};
  font-size: ${props => (props.font === 'admin' ? '12px' : '16px')};
  font-weight: ${props => (props.fontWigth === 'admin' ? '500' : 600)};
`;

const Button = ({ text, type = 'default', size = 'md', font = 'default', fontWigth = 'default', ...props }) => {
  return (
    <StyledButton type={type} size={size} font={font} fontWigth={fontWigth} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
