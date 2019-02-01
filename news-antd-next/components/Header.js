import React from 'react';
import styled from 'styled-components'

const Top = styled.header`
  display: flex;
  background-color: #A95F24;
`

const Title = styled.div`

`

const Login = styled.div`
  text-transform: uppercase;
`

const Header = () => {
  return (
    <Top>
      <Title>Hacker Next</Title>
      <Login>login</Login>
    </Top>
  );
};

export default Header;
