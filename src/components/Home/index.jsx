import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../shared/Header';
import Styles from './styles.css';

const Home = () => {
  return (
    <>
      <Header title="Home"/>
      
      <button>
        <Link to="/about">About</Link>
      </button>
      <div>
      <iframe src="https://i.pinimg.com/originals/3c/49/e5/3c49e5ab5eca9b57f3bba2e98ebd4fe9.jpg" width="500" height="600" frameBorder="0" allowFullScreen></iframe>
      </div>
    </>
  );
}
 
export default Home;