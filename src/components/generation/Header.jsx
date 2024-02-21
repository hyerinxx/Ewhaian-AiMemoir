import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles/Text';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;
const Icon = styled.img`
    width: 70px;
    height: 70px;
`;

function Header(props) {
    return (
        <Container>
            <H1>{props.children}</H1>
            <Icon src={props.image} alt="Icon" />
        </Container>
    );
}

export default Header;