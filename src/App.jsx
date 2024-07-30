import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import WordTable from './components/WordTable/WordTable';
import WordCarousel from './components/WordCarousel/WordCarousel';
import { ListOfWords } from './components/ListOfWords';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<WordTable />} />
        <Route path="/game" element={<WordCarousel words={ListOfWords} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;