import React from 'react';
import Nav from '@features/generation/GenerationNav';
import Header from '@features/generation/Header';
import InputForm from '@features/generation/InputForm';
import './Generation.css';

function Generation() {
    return (
        <main>
            <div id='nav-container'>
                <></>
                <Nav></Nav>
            </div>
            <Header image="\icon\logo-aimemoir.png">심리상담사 GPT AI 회고록</Header>
            <div id='main-container'>
                <InputForm></InputForm>
            </div>
        </main>
    );
}

export default Generation;