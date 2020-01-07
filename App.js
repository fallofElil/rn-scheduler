import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Navbar } from './src/Navbar';
import { AddTask } from './src/AddTask';

export default function App() {
  return (
    <Container>
      <Navbar title="Органайзер" />
      <Content>
        <AddTask />
      </Content>
    </Container>
  );
}
