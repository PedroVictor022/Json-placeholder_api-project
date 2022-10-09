import { useCallback, useEffect, useState } from "react"
import { ButtonFN } from "./components/Button";
import { Header } from "./components/header";
import { Posts } from "./components/posts";
import { InputResearch } from "./components/ResearchInput";
import { Title } from "./components/title";
import { Container } from "./style/UI";

import { dataPosts } from "./utils/LoadPost"


export function App() {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");


  const noMorePosts = posts + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase()
      );
    })
    : posts;



  const loadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await dataPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts)
    setPage(nextPosts)
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    loadPosts(page, postsPerPage);
    console.log('teste')
  }, [loadPosts, postsPerPage])

  return (
    <Container>
      <Header>
        <Title>JSONPLACEHOLDER API</Title>
        {
          !!searchValue && (
            <>
              <h3>Search Value: {searchValue}</h3>
            </>
          )

        }
        <InputResearch
          type="search"
          value={searchValue}
          onChange={handleChange}
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
            onClick={loadMorePosts}
            disabled={noMorePosts}
          >Load More Posts</ButtonFN>
        )
      }
    </Container>
  )
}

export default App
