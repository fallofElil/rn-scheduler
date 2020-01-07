import React from 'react';
import { Container, Content, Grid, Row, Col } from 'native-base';
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
