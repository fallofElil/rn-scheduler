import React from 'react';
import { Container, Content, Item, Button, Input, Icon } from 'native-base'

export const AddTask = props => {
    return (
        <Item>
            <Input placeholder="Описание задачи" />
            <Button rounded>
                <Icon name="add" />
            </Button>
        </Item>
    );
}