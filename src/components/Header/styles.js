import styled from "styled-components";

export const Headerr = styled.header`

  align-items: center;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  
  img {
    height: 10rem;
    margin: 0.3rem 0 0 1.5rem;
    object-fit: contain;
  }
  
  div {
    align-items: center;
    display: flex;
    margin-right: 2rem;
    
    p {
      font-size: 1.8rem;
    }
    
    svg {
      font-size: 2rem;
      margin: 1rem;
    }
    
    div {
      margin-right: 0;
    }
  }
`;

export const SearchInput = styled.div`

  border: 0.1rem solid lightgray;
  border-radius: 99.9rem;
  height: 3rem;
  justify-content: center;
  margin-right: 0 !important;
  padding: 1rem;
  
  input {
    border: none;
    width: 25rem;
  }
  
  svg {
    margin: 0 !important;
  }
`
