import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../shared/Header';

const Home = () => {
  return (
    <>
      <Header title="Home"/>
      <button>
        <Link to="/about">About</Link>
      </button>
    </>
  );
}
 
export default Home;