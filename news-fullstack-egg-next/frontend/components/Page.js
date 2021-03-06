import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    background: #eee;
  }
`

const Layout = styled.div`
  width: 85%;
  margin: 10px auto auto auto;
  background: #fff;
  @media (max-width: 750px) {
    margin: 0;
    width: auto;
  }
`

class Page extends Component {
  render() {
    return (
      <>
        <Global />
        <Layout>
          <Header />
          {this.props.children}
        </Layout>
      </>
    );
  }
}

export default Page;
