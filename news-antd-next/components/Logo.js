import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const Logo = styled.span`
  border: 1px solid #fff;
  display: inline-block;
  font-weight: bold;
  font-size: 11px;
  padding: 5px 8px;
  color: ${props => props.color ? props.color : '#fff'};
`

export default ({ className }) => (
  <Link href="/" passHref>
    <a><Logo className={className}>N</Logo></a>
  </Link>
);
