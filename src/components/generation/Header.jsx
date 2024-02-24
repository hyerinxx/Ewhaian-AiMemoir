import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles/Text';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;
const Text = styled(H1)`
    margin-top: -8px;
`;
const Icon = styled.img`
    width: 70px;
    height: 70px;
`;

function Header(props) {
    return (
        <Container>
            <Text>{props.children}</Text>
            <Icon src={props.image} alt="Icon" />
        </Container>
    );
}

export default Header;