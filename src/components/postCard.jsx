import { Card } from "../style/UI"

export function PostCard({ title, body, img, id }) {
   return (
      <Card key={id}>
         <img src={img} alt={title} />
         <h2>{title} - {id}</h2>
         <p>{body}</p>
      </Card>
   )
}
