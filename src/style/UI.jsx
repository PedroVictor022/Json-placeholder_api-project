import styled from "styled-components";

export const Container = styled.div`
   background-color: #222;
   color: #fefefe;
   width: 100%;
   min-height: 100vh;
   height: 100%;
   padding: 0.5rem 2rem;

   margin: 0 auto;
`;

export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   margin-top: 1rem;
   margin-bottom: 1.5rem;
`

export const ContainerCard = styled.div`
   width: 50%;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
   gap: 1.2rem;
   margin: 2rem auto;
`

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

export const TitleContent = styled.h1`
   text-align: center;
`

export const ButtonContent = styled.div`
   margin: 1rem auto;
   padding: 1rem;
   text-align: center;

   font-weight: 700;

   width: 50%;
   
   background-color: #7004af;
   border-radius: 4px;

   transition: all .2s;
   cursor: pointer;
   /* &:hover {
      transition: all .1s;
      background-color: #8b0bd4;
   } */
   &:disabled{
      background-color: red;
      cursor: pointer;
      cursor: pointer;
   }
`;

export const InputContent = styled.input`
   padding: 0.3rem;
   border-radius: 3px;
   border: none;
   outline: none;
   text-align: center;
`;