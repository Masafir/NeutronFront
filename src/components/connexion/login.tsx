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
const Title = styled.h4`

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
const MailLabel = styled.div`

`;
const PassLabel = styled.div`

`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
const ErrorInput = styled.div`
  color: red;
`;
function Login(props: any) {
  const { theme } = React.useContext(ThemeContext);
  const [mail,setMail] = useState<string>("");
  const [password,setPass] = useState<string>("");
  const { connectUser,error } = props;
  return (
    <Container theme={theme}>
      <Title> Se connecter </Title>
      { error && <ErrorInput> Utilisateur non trouvé </ErrorInput> }
      <InputsContainer>
        <MailLabel> Email </MailLabel>
        <Input value={mail} onChange={(e) => setMail(e.target.value)} />
        <PassLabel> Mot de passe </PassLabel>
        <Input value={password} type="password" onChange={(e) => setPass(e.target.value)} />
      </InputsContainer>
      <ConfirmButton onClick={() => connectUser({mail,password})}> Confirmer </ConfirmButton>
    </Container>
  );
}

export default Login;
