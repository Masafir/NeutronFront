import React, {  useEffect, useState } from 'react';
import Item from '../item';
import styled from 'styled-components';
//import TaskManager from '../book';
import { ThemeContext } from "../../theme-context";
import BookItem from '../item';
import axios from 'axios';
import Login from './login';
import SignUp from './signup';
import { useHistory } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display:flex;
  flex-direction: column;
  align-items:item;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`; 
const Title = styled.h1`
  width: 100%;
  text-align:center;
`;
const ConnexionContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ChangePage = styled.div`
  background-color: #1446A0;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

const SignUpDone = styled.div`
  padding: 5px;
  color: green;
`;

type userConnection = {
  mail: string;
  password: string;
};

type userSignup = {
  mail: string;
  password: string;
  username: string;
};

function Connexion() {
  const { theme, isLight } = React.useContext(ThemeContext);
  const [isSignUpPage,setIsSignUpPage] = useState<boolean>(false);
  const [error,setError] = useState<boolean>(false);
  const [signUpDone,setSignUpDone] = useState<boolean>(false);
  let history = useHistory();

  const connectUser = (user: userConnection) => {
    axios.post("http://localhost:4000/users/signin",{...user})
    .then(response => {
      console.log(response);
      if(response.data && response.data.accessToken)
      {
        localStorage.setItem("userToken",response.data.accessToken);
        history.push("");
      } 
    })
    .catch(e => {
      console.log(e);
      setError(true);
    
    });
  }

  const signUpUser = (user: userSignup) => {
    axios.post("http://localhost:4000/users/createUser",{...user})
    .then(response => {
      console.log(response);
      if(response.status === 201)
      {
        
        setIsSignUpPage(false);
        setSignUpDone(true);
      } 
    })
    .catch(e => {
      console.log(e);
      setError(true);
    
    });
  }

  return (
    <Container theme={theme}>
      <Title> {isSignUpPage ? "Inscription"  : "Connexion"} </Title>
      
      <ConnexionContainer>
        { signUpDone && <SignUpDone> Votre inscription a été complété avec succès veuillez vous connecter désormais </SignUpDone> }
        {
          isSignUpPage ?
          <SignUp error={error} signUpUser={(user: userSignup) => signUpUser(user)} />
          :
          <Login error={error} connectUser={(user: userConnection) => connectUser(user)} />
        }
        <ChangePage onClick={() => setIsSignUpPage(!isSignUpPage)} > {  isSignUpPage ? "Se Connecter" : "S'inscrire" } </ChangePage>
      </ConnexionContainer>

    </Container>
  );
}

export default Connexion;
