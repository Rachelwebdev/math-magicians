import React from 'react';

function Calculator() {
  return (
    <>
      <div className="calcContainer">
        <div id="resultDisplay">0</div>
        <div className="buttons">
          <div className="btn">AC</div>
          <div className="btn">+/-</div>
          <div className="btn">%</div>
          <div className="btn">/</div>
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="btn">x</div>
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="btn">-</div>
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
          <div className="btn">+</div>
        </div>
        <div className="lastRow">
          <div className="btn">0</div>
          <div className="btn">.</div>
          <div className="btn">=</div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
