import React from 'react';
import { Container, Header, Body, Title } from 'native-base';

export const Navbar = props => {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>{props.title}</Title>
                </Body>
            </Header>
        </Container>
    );
}