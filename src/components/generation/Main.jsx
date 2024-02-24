import React from 'react';
import Nav from './Nav';
import Header from './Header';
import InputForm from './InputForm';
import '../../styles/Generation.css';

function Main() {
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

export default Main;