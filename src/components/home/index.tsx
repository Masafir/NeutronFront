import React, {  useEffect, useState } from 'react';
import Item from '../item';
import styled from 'styled-components';
//import TaskManager from '../book';
import { ThemeContext } from "../../theme-context";
import BookItem from '../item';
import axios from 'axios';

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
const BooksContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const LabelBooks = styled.div`

`;

const Books = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

type book = {
  name: string;
  author: string;
  chapters: any[];
  types: any[];
  description: string;
  id: number;
}

function Home() {
  const { theme, isLight } = React.useContext(ThemeContext);
  const [books,setBooks] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/books")
    .then(response => {
      console.log(response);
      if(response.data && response.data.length > 0)
      {
        setBooks([...response.data]);
      } 
    })
    .catch(e => console.log(e));
  },[]);

  return (
    <Container theme={theme}>
      <Title> Bienvenue dans Neutron votre bibliothèque virtuelle</Title>
      
      <BooksContainer>
        <LabelBooks> Voici les livres du moment : </LabelBooks>
        <Books>

          {
          books.length > 0 ? 
          books.map(
            (book: book) => <BookItem
            name={book.name}
            author={book.author}
            chapters={book.chapters.length}
            types={book.types as any[]}
            id={book.id}
            theme={theme}
            description={book.description}
            />
          ) : " Pas de livres à présenter :(."
        
        
          }
        </Books>
      </BooksContainer>
    </Container>
  );
}

export default Home;
