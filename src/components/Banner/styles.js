import styled from "styled-components";

export const Section = styled.section`

  height: 50vh;
  padding: 25vh 5rem 4rem 5rem;
  position: relative;
  
  &:after {
    background: 
    url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg") 
    center center;
    content : "";
    display: block;
    height: 100%;
    left: 0;
    opacity : 0.8;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  
  div {
  
    color: black;
   
    width: 30rem;
    
    h1 {
      font-size: 3.2rem;
      line-height: 0.9;
    }
  
    h5 {
      font-size: 1.6rem;
      margin-top: 1rem;
    }
    
    button {
      background-color: #FF7779;
      color: #FFF;
      font-weight: 700;
      margin-top: 1rem;
      transition: all 0.5s;
      
      &:hover {
        background-color: #FFF;
        color: #FF7779;
      }
    }
    
  }

`
