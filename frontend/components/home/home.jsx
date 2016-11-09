import React from 'react';
import RegionsContainer from '../regions/regions_container';

const Home = () => (
  <div>
    <div className="home">
      <h1 id="home-title">Winter is Coming</h1>
      <h4 id="home-subtitle">Find shelter before it's too late</h4>
      <span id="please-demo">Please select Demo for full functionality</span>
    </div>
    <RegionsContainer />
  </div>
);

export default Home;
