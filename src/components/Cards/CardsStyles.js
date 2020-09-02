import styled from "styled-components";

export const Card = styled.div `
  border: 0 solid black;
  border-radius: 1rem;
  box-shadow: 0 0.6rem 1.8rem -0.9rem rgba(0, 0, 0, 0.75);
  cursor: pointer;
  margin: 1rem;
  overflow: hidden;
  transition: transform 100ms ease-in;
  
  &:hover {
    transform: scale(1.07);
  }

  img {
    height: 20rem;
    min-width: 30rem;
    object-fit: fill;
    width: 100%;
    
  }
`

export const CardInfo = styled.div `
  border: 0.1rem;
  border-radius: 1rem;
  margin: 1rem 1rem 0.5rem 1rem;
  
    h2 {
      font-size: 2.2rem;
      font-weight: 600;
    }
    
    h4 {
      font-size: 1.6rem;
      font-weight: 300;
      margin: 1rem 0;
      text-align: justify;
    }
    
    h3 {
      color: #FF7777;
      font-size: 1.6rem;
    }
`
