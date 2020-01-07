import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
//import { Navbar } from './src/Navbar';
//import { AddTask } from './src/AddTask';

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>
          This is Content Section
          </Text>
      </Content>
    </Container>
  );
}
