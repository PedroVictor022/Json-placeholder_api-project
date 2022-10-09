import { ContainerCard } from "../style/UI"
import { PostCard } from "./postCard"

export function Posts({ posts }) {

   return (
      <ContainerCard>
         {posts.map(item => {
            return (
               <PostCard
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  body={item.body}
                  img={item.cover}
               />
            )
         })}
      </ContainerCard>
   )
}