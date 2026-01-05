import React from 'react';
import Nav from "./components/Nav";
import Landing from './components/Landing';
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

const App= () => {
  return (
    <>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </>
  )
}

export default App;