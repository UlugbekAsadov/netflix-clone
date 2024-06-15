import React from "react";
import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Movies } from "./components/movies";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Movies sectionTitle="Now Playing" />
      <Movies sectionTitle="Top Rated" />
      <Movies sectionTitle="Popular" />
      <Movies sectionTitle="Upcoming" />
    </React.Fragment>
  );
};

export default App;
