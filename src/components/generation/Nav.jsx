import React from 'react';
import styled from 'styled-components';
import { H4 } from '../../styles/Text';

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 15px;
`;
const Icon = styled.img`
    width: 30px; height: 30px;
    padding-right: 15px;
`;
const Text = styled(H4)`
    margin-top: -3px;
    padding-right: 15px;
    display: none;

    .menu:hover & {
        display: block;
    }
`;

function Nav() {
    return (
        <nav>
            <Ul>
                <Li className='menu'>
                    <Icon src="\icon\storage.png" alt="보관함" />
                    <Text>보관함</Text>
                </Li>
                <Li className='menu'>
                    <Icon src="\icon\logout.png" alt="로그아웃" />
                    <Text>로그아웃</Text>
                </Li>
            </Ul>
        </nav>
    );
}

export default Nav;