import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'

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
  padding: 10px 0 0 0;
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
        <Layout>
          {this.props.children}
        </Layout>
      </>
    );
  }
}

export default Page;
