import React, {  useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display:flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`; 
const Title = styled.h1`

`;

function NotFound() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <Title> 404 vous êtes perdu ... </Title>
    </Container>
  );
}

export default NotFound;
