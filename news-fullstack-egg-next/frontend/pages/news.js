import React, { Component } from 'react';
import { initStore } from '../store'
import withRematch from '../utils/withRematch'
import Page from '../components/Page'
import Stories from '../components/Stories'
import Footer from '../components/Footer'

class News extends Component {
  static async getInitialProps({ store, query, res }) {
    const { p } = query
    const page = Number(p || 1)
    await store.dispatch.story.getStories({ page })
    if (res) res.setHeader("Cache-Control", "s-maxage=60");
    return { page }
  }

  render() {
    const { page } = this.props
    return (
      <Page>
        <Stories stories={this.props.stories} page={page} />
        <Footer page={page} />
      </Page>
    );
  }
}

const mapState = ({ story }) => {
  const { entities } = story
  return {
    stories: entities
  }
}

const mapDispatch = ({}) => ({

})

export default withRematch(initStore, mapState, mapDispatch)(News);
