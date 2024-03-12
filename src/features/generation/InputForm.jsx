import React from 'react';
import { H3 } from '@features/ui/Text';
import { Input, Button } from 'antd';
const { TextArea } = Input;

function InputForm() {
    return (
        <div id='input-form'>
            <H3>오늘의 일;</H3>
            <form>
                <TextArea
                    placeholder='오늘 일어난 일들을 간단히 적어주세요.'
                    style={{height: "200px"}}
                />
                <Button>GPT 회고록 생성해줘!</Button>
            </form>
        </div>
    );
}

export default InputForm;