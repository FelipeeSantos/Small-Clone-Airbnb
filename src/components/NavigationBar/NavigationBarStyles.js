import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
  
  div {
    display: flex;
    
      ul {
      
        li {
          list-style: none;
        
          a {
            outline: 0;
            text-decoration: none;
            
            button {
              border-radius: 3rem;
              margin-right: 0.5rem;
              
              &:hover {
                color: #f77777
              }
            }
          }
        }
      }
  }
`
