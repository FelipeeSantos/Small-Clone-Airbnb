import React from 'react';
import Header from "../../components/Header/Header";
import SearchDates from "../../components/SearchDates/SearchDates"
import {Main} from "./styles";
import Banner from "../../components/Banner/Banner";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <SearchDates />
        <Banner />
        <Section />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
