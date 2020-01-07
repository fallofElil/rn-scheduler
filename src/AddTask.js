import React from 'react';
import { Container, Button, Input } from 'native-base'

export const AddTask = props => {
    return (
        <Container>
            <Content>
                <Input placeholder="Описание задачи" />
                <Button>
                    <Icon name="plus" />
                </Button>
            </Content>
        </Container>
    )
}