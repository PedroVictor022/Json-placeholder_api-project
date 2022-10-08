import { Component, useEffect, useState } from "react"
import { PostCard } from "./components/postCard";
import { Title } from "./components/title";
import { Card, Container, ContainerCard } from "./style/UI";

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
    const [posts, photos] = await Promise.all([responsePosts, responsePhotos]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    // Retorna um objeto, copia tudo do objeto post e joga dentro do objeto retornado
    // Criamos um cover e passamos o array de photos, baseado no index do post e passamos a ulr
    const postsAndPhotos = postJson.map((post, index) => {
      return {
        ...post,
        cover: photosJson[index].url
      }
    })

    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state
    return (
      <Container>
        <Title>JSONPLACEHOLDER API</Title>
        <ContainerCard>
          {posts.map(item => {
            return (
             <PostCard 
              key={item.id}
              title={item.title}
              body={item.body}
              img={item.cover}
             />
            )
          })}
        </ContainerCard>
      </Container>
    )
  }
}

export default App
