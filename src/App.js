import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="head-text">
          <h2>Road Map</h2>
        </div>
        <div className="road-map-wapper">
          <div className="box1 box-a">
            <div className="curcle-1">
              <div className="inner-curcle-1">
                <h3>Q3</h3>
                <p>2021</p>
              </div>
            </div>
            <ul className="inner-box">
              <li>List every promising pair.</li>
              <li>Regular NFT drops</li>
              <li>Info & Analytics on ChronoSwap.org</li>
              <li>Audits of the contracts</li>
            </ul>
          </div>
          <div className="box2 box-b">
            <div className="curcle-2">
              <div className="inner-curcle-2">
                <h3>Q1</h3>
                <p>2021</p>
              </div>
            </div>
            <ul className="inner-box-2">
              <li>Reduce CNO emission per block</li>
              <li>Lottery system for burning mechanism</li>
              <li>CMC & Coingecko Listings</li>
              <li>NFT marketplace</li>
            </ul>
          </div>
          <div className="box3 box-c">
            <div className="curcle-3">
              <div className="inner-curcle-3">
                <h3>Q2</h3>
                <p>2021</p>
              </div>
            </div>
            <ul className="inner-box-3">
              <li>Launchpad & IFO</li>
              <li>Make ChronoSwap a crosschain Dex</li>
              <li>DAO token for governance</li>
              <li>Listing on CEX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
