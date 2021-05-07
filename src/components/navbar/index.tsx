import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from "../../theme-context";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`; 
const Title = styled.div`
  font-weight: 900;
  padding: 5px;
`;
const Nav = styled(NavLink)`
  margin: 0px 5px;
  text-decoration: none;
  padding: 5px;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  border-bottom: 1px solid ${props => props.theme ? props.theme.foreground : "black"};
`;
const DecoButton = styled.div`
  margin: 0px 5px;
  text-decoration: none;
  padding: 5px;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  border-bottom: 1px solid ${props => props.theme ? props.theme.foreground : "black"};
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToggleThemeButton = styled.div`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => props.theme ? props.theme.background : "white"};
  background-color: ${props => props.theme ? props.theme.foreground : "black"};
`;

function Navbar() {
  const { theme, toggleTheme, isLight } = React.useContext(ThemeContext);
  const [noUser,setNoUser] = useState(true);

  useEffect(() => {
    if(!localStorage.getItem("userToken") && !noUser) 
    {
      setNoUser(true);
    }
    else if(localStorage.getItem("userToken") && noUser)
    {
      setNoUser(false);
    }
  },)

  return (
    <Container theme={theme}>
      <Title> Neutron </Title>
      <NavContainer>
        <Nav to="/" theme={theme}> Accueil </Nav>
        { 
          noUser && localStorage.getItem("userToken") ? <DecoButton onClick={() => {setNoUser(false); localStorage.removeItem("userToken");}} theme={theme}> Deconnexion </DecoButton> : <Nav to="/connexion" theme={theme}> Connexion </Nav>
         }
        { 
          noUser && localStorage.getItem("userToken") && <Nav to="/profil" theme={theme}> Profil </Nav>
        }
      </NavContainer>
      <ToggleThemeButton theme={theme} onClick={toggleTheme}> Turn to {isLight ? "DarkMode" : "LightMode"} </ToggleThemeButton>
      
    </Container>
  );
}

export default Navbar;
