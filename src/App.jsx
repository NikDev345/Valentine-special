import { useState, useRef } from "react";
import replyVideo from "./assets/Reply-me-love.mp4";
import loveVideo from "./assets/Love-me.mp4";
import "./App.css";

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const noBtnRef = useRef(null);
  const containerRef = useRef(null);

  const moveNoButton = () => {
    const container = containerRef.current;
    const button = noBtnRef.current;

    const maxX = container.offsetWidth - button.offsetWidth;
    const maxY = container.offsetHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  };

  const handleYes = () => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="app">
      {!showResult && !showLoader && (
        <div className="question-container" ref={containerRef}>
          <video src={replyVideo} autoPlay muted loop className="local-gif" />
          <h2 className="question">Do you love me?</h2>

          <div className="button-container">
            <button className="btn yes-btn" onClick={handleYes}>
              Yes
            </button>

            <button
              className="btn no-btn"
              ref={noBtnRef}
              onMouseEnter={moveNoButton}
            >
              No
            </button>
          </div>
        </div>
      )}

      {showLoader && (
        <div className="cssload-main">
          <div className="cssload-heart">
            <span className="cssload-heartL"></span>
            <span className="cssload-heartR"></span>
            <span className="cssload-square"></span>
          </div>
          <div className="cssload-shadow"></div>
        </div>
      )}

      {showResult && (
        <div className="result-container">
          <video src={loveVideo} autoPlay loop className="gif-result" />
          <h2>I knew it 😍!</h2>
        </div>
      )}
    </div>
  );
}
