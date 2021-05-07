import React, {  useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`; 
const Title = styled.h1`

`;
type user = {
  mail: string;
  username: string;
  books: any[];
};


function Profil() {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <Container theme={theme}>
      <Title> Admin </Title>

    </Container>
  );
}

export default Profil;
