import React, { useState } from 'react';
import './index.css';

function changeColor(e) {
  let x = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
  e.target.style.background = `linear-gradient(to right, hsl(6, 100%, 80%)  0%, hsl(335, 100%, 65%) ${x}%, hsl(229, 57%, 11%) ${x}%, hsl(229, 57%, 11%) 100%)`;
}

function App() {
  const [count, setCount] = useState(815);
  let silver = 1000 - count;

  return (
    <>
      <img src="bg-desktop.png" alt="" className="absbas" />
      <div className="fylo">
        <div className="left">
          <div className="top">
            <img src="./logo.svg" alt="" />
          </div>
          <div className="bottom">
            <div className="img">
              <img src="./icon-document.svg" alt="" />
            </div>
            <div className="img">
              <img src="./icon-folder.svg" alt="" />
            </div>
            <div className="img">
              <img src="./icon-upload.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="abs">
            <span>{silver}</span>GB Left
            <div className="absabs"></div>
          </div>
          <div className="card">
            <p>
              You've used <span>{count}</span> GB of your storage
            </p>
            <div className="input">
              <input
                type="range"
                value={count}
                min="0"
                max="1000"
                onChange={(e) => setCount(Number(e.target.value))}
                onMouseMove={changeColor}
                onTouchMove={changeColor}
                onTouchEnd={changeColor}
              />
            </div>
            <div className="belInput">
              <p>0gb</p>
              <p>1000gb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;