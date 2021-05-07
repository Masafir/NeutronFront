//import { type } from "node:os";
import React,{ FC, FunctionComponent, useState,useEffect } from "react";
import styled from 'styled-components';
import Axios from 'axios'
import axios from "axios";
import { ThemeContext } from "../../theme-context";

const Container = styled.div`
  height: calc(100vh - 60px);
  color: ${props => props.theme ? props.theme.foreground : "black"};
  background-color: ${props => props.theme ? props.theme.background : "white"};
`;
const TasksContainer = styled.div`
  margin: 15px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const NoContent = styled.div`

`;

type task = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: number;
}

function TaskManager (){
/*   const [tasks,setTasks] = useState<any[]>([]);
  const { theme, isLight } = React.useContext(ThemeContext);

  function updateTaskStatus(id: number,status: string){
    axios.patch(`http://localhost:3001/tasks/updateTaskStatus`,{id,status})
    .then(response => {
      const { data } = response;
      if(data){
        let newTasks = [...tasks];
        let updatedTaskId = newTasks.findIndex(task => task.id === id);
        newTasks.splice(updatedTaskId,1,data);
        setTasks([...newTasks]);
      }
    })
    .catch(e => console.error(e));
  }

  function suppressTask(id: number) {
    axios.delete(`http://localhost:3001/tasks/${id}`)
    .then(response => {
      let newTasks = [...tasks];
      let deletedTaskId = newTasks.findIndex(task => task.id === id);
      newTasks.splice(deletedTaskId,1);
      setTasks([...newTasks]);
    })
    .catch(e => console.error(e));
  }

  function addTask(task: object){
    axios.post("http://localhost:3001/tasks/addTask",task)
    .then(response => {
      const { data } = response;
      if(data){
        setTasks([...tasks,data]);
      }
    })
    .catch(e => console.log(e));
  }

  useEffect(() => {
    axios.get("http://localhost:3001/tasks/getAllTasks")
    .then(response => {
      console.log(response);
      if(response.data && response.data.length > 0)
      {
        setTasks([...response.data]);
      } 
    })
    .catch(e => console.log(e)); 
    
  },[]);
  */
  
  return(
    <Container>
      {/* <AddTask addTask={(task) => addTask(task)} />
      <TasksContainer>
        {
        tasks.length > 0 ?
          tasks.map((task: task) => 
          <Item 
            title={task.title}
            theme={theme} 
            description={task.description} 
            priority={task.priority} 
            suppressTask={() => suppressTask(task.id)}
            updateTaskStatus={(status: string) => updateTaskStatus(task.id,status)}
            status={task.status}
          />)
        : <NoContent> Vous n'avez malheureusement pas de tâches :( . </NoContent>
        }    
      </TasksContainer> */}
    </Container>
  )
}


export default TaskManager;