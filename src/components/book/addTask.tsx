import React,{ useState,FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;
const Label = styled.label`

`;
const TitleInput = styled.input`
  margin: 5px 0;
`;
const DescriptionInput = styled.textarea`
  margin: 5px 0;
`;
const InputsContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const AddContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const AddButton = styled.div`
  background-color: green;
  border-radius: 5px;
  padding: 5px;
  color: white;
`;
const ErrorContainer = styled.div`
  width: 100%;
  color: red;
  display:flex;
  justify-content: center;
  text-align: center;
  padding: 5px;
`;

type AddTaskProps = {
  addTask: (task: object) => void;
}

function AddTask(props: AddTaskProps){

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [priority,setPriority] = useState(0);
  const [openTask,setOpenTask] = useState(false);
  const [error,setError] = useState(false);


  const handleAddTask = () => {
    if(title.trim().length > 0 && description.trim().length > 0){
      props.addTask({title,description,priority});
      setTitle("");
      setDescription("");
      setError(false)
    }
    else{
      setError(true);
    }
}

  return(
    <Container> 
      
        <InputsContainer>
          <Label> Titre </Label>
          <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label> Description </Label>
          <DescriptionInput value={description} onChange={(e) => setDescription(e.target.value)} />
          <AddContainer> 
            <AddButton onClick={handleAddTask}> Confirmer </AddButton>
          </AddContainer>
        </InputsContainer>
        {
        error &&
        <ErrorContainer> 
           Veuillez remplir tous les champs avant de confirmer
        </ErrorContainer>
        }
    </Container>
  )
}

export default AddTask;