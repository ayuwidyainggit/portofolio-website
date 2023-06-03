import React from "react";
import MainLayout from "../layouts/MainLayout";
import Jumbotron from "../components/Jumbotron";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <MainLayout>
      <Jumbotron />
      <AboutMe />
      <MyProjects />
      <Footer />
    </MainLayout>
  );
};

export default Home;
