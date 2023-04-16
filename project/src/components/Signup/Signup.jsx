import React from 'react'
import styled from 'styled-components';
const Form = styled.form`
  
`
export default function Signup() {
  return (
    <div>
        <p>회원가입 페이지</p>
        <Form>
            <input type="text" textarea="ID입력"/>
            <input type="password" textarea="PW입력"/>
            <input type="text" />
            <input type="text" />
        </Form>
    
    </div>
  )
}
