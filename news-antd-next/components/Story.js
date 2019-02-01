import React from 'react';
import Title from './styles/Title'
import parse from 'url-parse'

const Story = ({ id, title, date, url, user, score, commentsCount }) => {
  const { host } = parse(url)
  return (
    <div>
      <Title>
        { url ? <a href={url}>{title}</a> : <a>{title}</a> }
      </Title>
    </div>
  );
};

export default Story;
