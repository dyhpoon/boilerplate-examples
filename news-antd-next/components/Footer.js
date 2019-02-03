import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

const More = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 15px;
`

const Wrapper = styled.div`
  padding: 10px 0 40px 30px;
`

const Footer = ({ page = 1 }) => {
  return (
    <Wrapper>
      <Link passHref href={{
        query: { p: page + 1 }
      }}>
        <More>More</More>
      </Link>
    </Wrapper>
  );
};

export default Footer;
