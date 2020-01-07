import React, { Component } from 'react';
import { Item, Button, Input, Icon } from 'native-base'

class AddTask extends Component {
    /*const pressBtn = () => {
        onSubmit('Была нажата кнопка');
    }*/

    render() {
        return (
            <Item>
                <Input placeholder="Описание задачи" />
                <Button rounded >
                    <Icon name="add" />
                </Button>
            </Item>
        );
    }
}

export default AddTask;