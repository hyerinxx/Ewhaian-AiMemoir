import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: 30px;
    gap: 20px;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

function Nav(props) {
    return (
        <Container>
            <></>
            <NavContainer>
                    <Icon src="\icon\storage.png" alt="보관함" />
                    <Icon src="\icon\logout.png" alt="로그아웃" />
            </NavContainer>
        </Container>
    );
}

export default Nav;