import { Component, useEffect, useState } from "react"
import { ButtonFN } from "./components/Button";
import { Header } from "./components/header";
import { PostCard } from "./components/postCard";
import { Posts } from "./components/posts";
import { InputResearch } from "./components/ResearchInput";
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
      postsPerPage: 2,
      searchValue: ""
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

  handleChange = (e) => {
    const { searchValue } = this.state
    const { value } = e.target;

    this.setState({
      searchValue: value
    })
    console.log(searchValue)
  }

  render() {
    const { posts, postsPerPage, allPosts, searchValue } = this.state;

    const noMorePosts = posts + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase()
        );
      })
      : posts;

    return (
      <Container>
        <Header>
          <Title>JSONPLACEHOLDER API</Title>
          {/* {
            !!searchValue && (
              <>
                <h3>Search Value: {searchValue}</h3>
              </>
            )

          } */}
          <InputResearch
            type="search"
            value={searchValue}
            onChange={this.handleChange}
          />
        </Header>


        {
          filteredPosts.length === 0 ? (
            <>
              <Title>Not Found post {searchValue}</Title>
            </>
          )
            :
            (
              <Posts posts={filteredPosts} />
            )
        }

        {
          !searchValue && (
            <ButtonFN
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            >Load More Posts</ButtonFN>
          )
        }
      </Container>
    )
  }
}

export default App
