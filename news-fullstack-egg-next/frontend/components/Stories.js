import React from 'react';
import _Story from './Story'
import styled from 'styled-components'
import { PAGE_SIZE } from '../store/models/story'

const Wrapper = styled.div`
  padding: 10px 0;
`

const Item = styled.div`
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
    <Wrapper>
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
          <Item key={story.id}>
            <Index>{ ((page - 1) * PAGE_SIZE ) + i + 1 }.</Index>
            <Story {...attributes} />
          </Item>
        )
      }) }
    </Wrapper>
  );
};

export default Stories;
