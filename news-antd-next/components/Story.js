import React from 'react';
import parse from 'url-parse'

const Story = ({ id, title, date, url, user, score, commentsCount }) => {
  const { host } = parse(url)
  return (
    <div>
      <p>
        { url ? <a href={url}>{title}</a> : <a>{title}</a> }
      </p>
    </div>
  );
};

export default Story;
