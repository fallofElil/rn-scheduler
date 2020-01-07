import React, { Component } from 'react';
import { Container, Content, List, ListItem } from 'native-base';
import { Navbar } from './src/Navbar';
import { AddTask } from './src/AddTask';

class App extends Component {
  /*const [tasks, setTasks] = useState([])

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title
    }

    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }*/

  render() {
    return (
      <Container>
        <Navbar title="Органайзер" />
        <Content>
          <AddTask />
        </Content>
      </Container>
    );
  }
}

export default App;
/*
<ListItem>
          {tasks.map(task => {
          return <List>{task.title}</List>
          })}
        </ListItem>
 */