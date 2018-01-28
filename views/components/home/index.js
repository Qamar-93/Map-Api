import React, { Component } from 'react';
import Navbar from '../navbar/';
import Map from '../map/';
import './index.css';

class Home extends Component {
  render() {

    return (
      <div className='home'>
        <Navbar />
        <Map />
      </div>
    );
  }
}

export default Home;
