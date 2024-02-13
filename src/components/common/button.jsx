import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.type === 'warning' ? '#FF7171' : props.type === 'default' ? '#08c7fd' : props.type === 'outlined' ? 'transparent' : '#FFBB00')};
  border: 2px ${props => (props.type === 'yellow' ? '#FFBB00' : props.type === 'warning' ? '#FF7171' : '#08c7fd')} solid;
  color: ${props => (props.type === 'outlined' ? '#08c7fd' : 'white')};
  border-radius: 6px;
  width: ${props => (props.size === 'md' ? '201px' : props.size === 'sm' ? '116px' : props.size === 'amd' ? '77px' : props.size === 'al' ? '280px' : props.size === 'asm' ? '55px' : '318px')};
  height: ${props => (props.size === 'sm' ? '32.66px' : props.size === 'asm' ? '34px' : props.size === 'amd' ? '34px' : '45px')};
  font-size: ${props => (props.font === 'admin' ? '12px' : props.font === 'md' ? '14px' : '16px')};
  font-weight: ${props => (props.fontWigth === 'admin' ? '500' : 600)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Button = ({ text, type = 'default', size = 'md', font = 'default', fontWigth = 'default', icon = 'default', ...props }) => {
  return (
    <StyledButton type={type} size={size} font={font} fontWigth={fontWigth} icon={icon} {...props}>
      {icon === 'user' && <img src="./icons/user-white.svg" width={'24px'} />}
      {text}
      {icon === 'arrow' && <img src="./icons/arrow-white.svg" width={'24px'} />}
    </StyledButton>
  );
};

export default Button;
