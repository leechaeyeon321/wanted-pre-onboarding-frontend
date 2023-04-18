import React, { useState } from 'react'
import styled from 'styled-components';
const Form = styled.form`
  
`
export default function Signup() {
  const [id, setId] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [isId, setIsId] = useState(false);
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
    if (e.target.value < 2 || e.target.value.length > 8) {
      setIdMessage('2글자 이상 8글자 미만으로 입력해주세요');
      setIsId(false);
    } else {
      setIdMessage('올바른 이름 형식입니다.');
      setIsId(true);
    }
  };
  return (
    <div>
        <p>회원가입 페이지</p>
        <Form>
            <input type="text" textarea="ID입력" onChange={onIdHandler}/>
            <input type="password" textarea="PW입력"/>
            <input type="text" />
            <input type="text" />
        </Form>
    </div>
  )
}
