import React from 'react';
import styled from 'styled-components'

const Logo = styled.span`
  border: 1px solid #fff;
  display: inline-block;
  font-weight: bold;
  font-size: 11px;
  padding: 5px 8px;
  color: #fff;
`

export default ({ className }) => (
  <Logo className={className}>N</Logo>
);
