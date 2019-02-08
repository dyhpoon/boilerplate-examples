import React from 'react';
import parse from 'url-parse'
import styled from 'styled-components'
import moment from 'moment'
import pluralize from 'pluralize'

const Box = styled.div`
  padding: 0 5px;
`

const Title = styled.p`
  margin-bottom: 3px;
`

const URL = styled.a`
  text-decoration: none;
  color: #000;
  :visited {
    color: #828282;
  }
`

const Source = styled.a`
  margin-left: 5px;
  color: #A5A5A5;
  font-size: 12px;
  text-decoration: none;
  :visited {
    text-decoration: underline;
  }
`

const Text = styled.span`
  font-size: 12px;
  color: #A5A5A5;
`

const Story = ({ id, title, date, url, user, score, commentsCount, className }) => {
  const { host } = parse(url)
  const parsedHost = host.replace(/www./, '')
  return (
    <Box className={className}>
      <Title>
        { url ? <URL href={url}>{title}</URL> : <URL>{title}</URL> }
        { url ? <Source href={url}>{parsedHost}</Source> : "" }
      </Title>
      <div>
        <Text>{score} points by </Text>
        <Text>{user} </Text>
        <Text>{moment(date * 1000).startOf('day').fromNow()} </Text>
        <Text>| </Text>
        <Text>{commentsCount} {pluralize('comment', commentsCount)}</Text>
      </div>
    </Box>
  );
};

export default Story;
