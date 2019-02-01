import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
`

const Layout = styled.div`
  width: 85%;
  margin: auto;
  @media (max-width: 750) {
    padding: 0;
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
