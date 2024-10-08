import React from "react";

const Flashcard = ({ front, back, onFlip, isFlipped }) => {
  return (
    <div className="flashcard">
      <div
        className={`flashcard-content ${isFlipped ? "flipped" : ""}`}
        onClick={onFlip}
      >
        {isFlipped ? back : front}
      </div>
    </div>
  );
};

export default Flashcard;
