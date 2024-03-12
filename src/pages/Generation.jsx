import React from 'react';
import styled from 'styled-components';
import Nav from '@features/generation/GenerationNav';
import Header from '@features/generation/Header';
import InputForm from '@features/generation/InputForm';

function Generation() {
    return (
        <main>
            <Nav></Nav>
            <AppContainer>
                <Header image="\icon\logo-aimemoir.png">심리상담사 GPT AI 회고록</Header>
                <div id='main-container'>
                    <InputForm></InputForm>
                </div>
            </AppContainer>
        </main>
    );
}

export default Generation;

const AppContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-width: 850px;
    width: 100%;
    margin: 0 auto;
`;