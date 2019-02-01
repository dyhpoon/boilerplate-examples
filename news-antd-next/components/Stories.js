import React from 'react';
import Story from './Story'

const Stories = ({ stories, page = 1 }) => {
  return (
    <div>
      { stories.map((story, i) => {
        const attributes = {
          id: story.id,
          title: story.title,
          date: story.time,
          url: story.url,
          user: story.by,
          score: story.score,
          commentsCount: story.descendants,
        }
        return (
          <div className="story" key={story.id}>
            <Story {...attributes} />
          </div>
        )
      }) }
    </div>
  );
};

export default Stories;
