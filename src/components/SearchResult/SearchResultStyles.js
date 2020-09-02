import styled from "styled-components";

export const SearchResults = styled.section`
  border-bottom: 0.1rem solid lightgrey;
  cursor: pointer;
  display: flex;
  margin: 2rem;
  opacity: 1;
  padding: 2rem;
  position: relative;
  
  &:hover {
    opacity: 0.8;
  }
  
  img {
    border-radius: 1rem;
    height: 20rem;
    overflow: hidden;
    width: 35rem;
  }
  
  .searchResultHeart {
    position: absolute;
    right: 4rem;
    top: 2rem;
  }
`

export const SearchResultsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2rem;
`

export const SearchResultsDescription = styled.div`
  width: 40vw;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-top: 1rem;
  }
  
  p {
    color: gray;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`

export const SearchResultsRange = styled.div`
  margin-top: 5rem;
  width: 6rem;
  
  div {
    align-items: center;
    display: flex;
    justify-content: left;

    
    svg {
      color: red;
      font-size: 2.2rem;
      margin-right: 0.3rem;
    }
    
    p {
      align-items: center;
      display: flex;
      font-size: 1.8rem;
    }
  }
  
`

export const SearchResultsPrice = styled.div`
  text-align: right;
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  
  h2 {
    font-size: 2.6rem;
  }
  
  p {
    font-size: 1.6rem;
  }
  
`
