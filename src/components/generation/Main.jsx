import React from 'react';
import '../../styles/Generation.css';
import Header from './Header';
import Nav from './Nav';
import { H1, H2, H3, H4 } from '../../styles/Text';

function Main() {
    return (
        <main>
            <Nav></Nav>
            <section>
                <Header image="\icon\logo-aimemoir.png">심리상담사 GPT AI 회고록</Header>
            </section>
        </main>
    );
}

export default Main;