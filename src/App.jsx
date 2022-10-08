import { Component, useEffect, useState } from "react"
import { ButtonFN } from "./components/Button";
import { PostCard } from "./components/postCard";
import { Posts } from "./components/posts";
import { Title } from "./components/title";
import { Container } from "./style/UI";

import { dataPosts } from "./utils/LoadPost"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 10
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state

    const postsAndPhotos = await dataPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage
      ),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })

    console.log(posts)
  }

  render() {
    const { posts, postsPerPage, allPosts } = this.state;

    const noMorePosts = posts + postsPerPage >= allPosts.length

    return (
      <Container>
        <Title>JSONPLACEHOLDER API</Title>
        <Posts posts={posts} />
        <ButtonFN
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
        >Load More Posts</ButtonFN>
      </Container>
    )
  }
}

export default App
