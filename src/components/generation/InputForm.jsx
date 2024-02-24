import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import { H3 } from '../../styles/Text';

function InputForm() {
    return (
        <div id='input-form'>
            <H3>오늘의 일;</H3>
            <form>
                <TextArea rows={4} placeholder='오늘 일어난 일들을 간단히 적어주세요.' />
                <Button style={ButtonStyle}>GPT 회고록 생성해줘!</Button>
            </form>
        </div>
    );
}

export default InputForm;