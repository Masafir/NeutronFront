//import { type } from "node:os";
import React,{ FC, FunctionComponent } from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 200px;
  height: 200px;
  background-color:  ${props => props.theme ? props.theme.itembg : "#dee2e6"};
  border-radius: 10px;
  padding: 15px;
`;

const ItemLabel = styled.label`
  font-weight: 900;
  padding-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

const ItemDescription = styled.div`
  word-break: break-word;
`;

const ItemPriority = styled.div`

`;

const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.div`
  border: 1px solid red;
  background-color: red;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;

  flex-direction: column;
  padding: 5px;
  height: 100%;
  align-items: center;
`;

const ItemStatus = styled.select`

`;
const StatusOptions = styled.option`

`;

type IItemProps = {
  name: string;
  author: string;
  chapters: number;
  types: any[];
  description: string;
  id: number;
  theme: object;
}
const Item : FC<IItemProps> = (props: IItemProps) => (
  <Container theme={props.theme}>
      <ItemLabel> {props.name} </ItemLabel>
    <InfoContainer>
      <ItemDescription> {props.description} </ItemDescription>
      <ItemPriority> de {props.author} </ItemPriority>
    </InfoContainer>
  </Container>
)

export default Item;