import React from 'react';
import styled from 'styled-components'
import _Logo from './Logo'
import Link from 'next/link'

const TopBar = styled.header`
  display: flex;
  background-color: #FFA444;
  font-size: 14px;
  align-items: center;
`

const Left = styled.div`
  flex: 9;
`

const Right = styled.div`
  flex: 1;
  text-align: right;
`

const Logo = styled(_Logo)`
  margin: 2px 4px;
`

const Title = styled.span`
  font-weight: bold;
  padding: 8px 4px 8px 4px;
  display: inline-block;
  color: #000;
`

const Login = styled.a`
  text-transform: uppercase;
  display: inline-block;
  padding-right: 10px;
  font-weight: bold;
  font-size: 11px;
`

const Header = () => {
  return (
    <TopBar>
      <Left>
        <Logo />
        <Title>Hacker News</Title>
      </Left>
      <Right>
        <Link prefetch href="/login">
          <Login>login</Login>
        </Link>
      </Right>
    </TopBar>
  );
};

export default Header;
