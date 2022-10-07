import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   gap: 1.2rem;

   background-color: #222;
   color: #fefefe;
`;

export const Card = styled.div`
   background-color: #333333;
   box-shadow: 0 0 10px rgba(0,0,0,0.5);
   padding: 1rem;
   border-radius: 0.2rem;
`;