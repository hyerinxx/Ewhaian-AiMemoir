import React from 'react';
import styled from 'styled-components';
import Nav from '@features/generation/GenerationNav';
import Title from '@features/generation/Title';
import InputForm from '@features/generation/InputForm';

function Generation() {
    return (
        <main>
            <Nav></Nav>
            <AppContainer>
                <Title image="\icon\logo-aimemoir.png">심리상담사 GPT AI 회고록</Title>
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