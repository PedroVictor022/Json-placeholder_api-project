import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   gap: 1.2rem;

   background-color: #222;
   color: #fefefe;

   width: 100%;
   padding: 0.5rem 2rem;
`;

export const Card = styled.div`
   background-color: #333333;
   box-shadow: 0 0 10px rgba(0,0,0,0.5);
   padding: 1rem;
   border-radius: 0.2rem;

   transition: all .1s ease-in-out;

   img {
      max-width: 100%;
   }

   h2 {
      margin-top: 0.5rem;
      margin-bottom:0.5rem;
   }

   &:hover {
      transition: .2s;
      transform: scale(1.05)
   }
`;