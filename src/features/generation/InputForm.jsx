import React from 'react';
import { H3 } from '@features/ui/Text';
import { Input, Button } from 'antd';
import styled from 'styled-components';
const { TextArea } = Input;

const ButtonContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`;

function InputForm() {
    return (
        <div id='input-form'>
            <H3>오늘의 일;</H3>
            <form>
                <TextArea
                    placeholder='오늘 일어난 일들을 간단히 적어주세요.'
                    style={{height: "200px"}}
                />
                <ButtonContainer>
                    <Button>GPT 회고록 생성해줘!</Button>
                </ButtonContainer>
            </form>
        </div>
    );
}

export default InputForm;