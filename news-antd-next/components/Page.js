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
  }
`

const Layout = styled.div`
  width: 85%;
  margin: auto;
  @media (max-width: 750px) {
    padding: 0;
    width: auto;
  }
`

class Page extends Component {
  render() {
    return (
      <>
        <Global />
        <Header />
        <Layout>
          {this.props.children}
        </Layout>
      </>
    );
  }
}

export default Page;
