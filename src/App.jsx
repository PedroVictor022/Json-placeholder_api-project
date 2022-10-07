import { Component, useEffect, useState } from "react"
import { Card, Container } from "./style/UI";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');

    const responsePhotos = await fetch('https://jsonplaceholder.typicode.com/photos');

    // Junta as promises em um array
    const [posts, photos] = await Promise.all([responsePosts]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    this.setState({ posts: postJson})
  }

  render() {
    const { posts } = this.state
    return (
      <Container>
        <h1>JSON PLACEHOLDER API</h1>
        {posts.map(item => {
          return (
            <Card key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </Card>
          )
        })}
      </Container>
    )
  }
}

export default App
