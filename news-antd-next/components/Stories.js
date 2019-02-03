import React from 'react';
import _Story from './Story'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
`

const Index = styled.span`
  align-self: flex-start;
  color: #949494;
`

const Story = styled(_Story)`
  display: inline-block;
`

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
          <Box key={story.id}>
            <Index>{i + 1}.</Index>
            <Story {...attributes} />
          </Box>
        )
      }) }
    </div>
  );
};

export default Stories;
