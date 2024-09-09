import React from 'react';
import styled from 'styled-components';


interface InfoProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

const StyledDiv = styled.div<InfoProps>`
    margin: 5px;
    display: block;
    width: 100%;
    color: #ac8150; 
    text-transform: none; 
    font-family: "Caveat", cursive; 
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
`;

const Info: React.FC<InfoProps> = (props) => (
  <StyledDiv {...props}>
    {props.children}
  </StyledDiv>
);

export default Info;