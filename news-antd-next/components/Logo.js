import React from 'react';
import styled from 'styled-components'

const Logo = styled.span`
  border: 1px solid #fff;
`

export default ({ className }) => (
  <Logo className={className}>N</Logo>
);
