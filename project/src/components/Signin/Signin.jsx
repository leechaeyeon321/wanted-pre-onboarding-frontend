import React from 'react'
import styled from 'styled-components';

const Form = styled.form`
  
`
export default function Signin() {
  return (
    <div>
      <p>로그인 페이지</p>
      <Form>
        <input type="text" textarea="ID입력"/>
        <input type="password" textarea="PW입력"/>
        <button>로그인</button>
      </Form>
    
    </div>
  )
}
