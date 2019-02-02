import React from 'react';
import styled from 'styled-components'
import _Logo from './Logo'

const TopBar = styled.header`
  display: flex;
  background-color: #FFA444;
  font-size: 14px;
`

const Left = styled.div`
  flex: 9;
`

const Right = styled.div`
  flex: 1;
  text-align: right;
`

const Logo = styled(_Logo)`
  margin: 4px 5px 2px 4px;
`

const Title = styled.span`
  font-weight: bold;
  padding: 8px 4px 8px 4px;
  display: inline-block;
`

const Login = styled.div`
  text-transform: uppercase;
`

const Header = () => {
  return (
    <TopBar>
      <Left>
        <Logo />
        <Title>Hacker Next</Title>
      </Left>
      <Right>
        <Login>login</Login>
      </Right>
    </TopBar>
  );
};

export default Header;
