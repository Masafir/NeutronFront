import React, {  useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';
const Container = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`; 
const Title = styled.h1`

`;
const Input = styled.input`
  margin: 5px 0px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 0;
`; 
const ConfirmButton = styled.div`
  padding: 5px;
  margin: 5px;
  background-color: #7DC95E;
  color: white;
  border-radius: 5px;
`;
const Label = styled.div`

`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
const ErrorInput = styled.div`
  color: red;
`;

function Signup(props: any) {
  const { theme } = React.useContext(ThemeContext);
  const [mail,setMail] = useState<string>("");
  const [password,setPass] = useState<string>("");
  const [confirmPass,setConfirmPass] = useState<string>("");
  const [username,setUsername] = useState<string>("");
  
  const handleConfirm = (user: any) => {
    const { signUpUser } = props;
    if(confirmPass === password)
    {
      signUpUser({...user});
    }
  } 

  return (
    <Container theme={theme}>
      <Title> Inscription </Title>
      <InputsContainer>
        <Label> Email </Label>
        <Input type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
        <Label> Mot de passe </Label>
        <Input type="password" value={password} onChange={(e) => setPass(e.target.value)} />
        <Label> Confirmer le mot de passe </Label>
        <Input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
        <Label> Nom d'utilisateur </Label>
        <Input value={username}  onChange={(e) => setUsername(e.target.value)} />
      </InputsContainer>
      <ConfirmButton onClick={() => handleConfirm({mail,password,username})}> Confirmer </ConfirmButton>
    </Container>
  );
}

export default Signup;
