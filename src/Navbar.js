import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';

class Navbar extends Component {
    render() {
        return (
            <Header>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}

export default Navbar;