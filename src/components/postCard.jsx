import { Card, Container, ContainerCard } from "../style/UI"
import { Title } from "./title"

export function PostCard({ title, body, img }) {
   return (
      <Card>
         <img src={img} alt={title} />
         <h2>{title}</h2>
         <p>{body}</p>
      </Card>
   )
}
