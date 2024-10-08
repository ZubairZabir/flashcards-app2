import React, { useState } from "react";
import Flashcard from "./components/Flashcard";

const flashcardsData = [
  { front: "What is 2 + 2?", back: "4" },
  { front: "Capital of France?", back: "Paris" },
];

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const nextCard = () => {
    if (currentCard < flashcardsData.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (
      userAnswer.toLowerCase() ===
      flashcardsData[currentCard].back.toLowerCase()
    ) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect");
    }
  };

  return (
    <div className="app">
      <Flashcard
        front={flashcardsData[currentCard].front}
        back={flashcardsData[currentCard].back}
        onFlip={handleFlip}
        isFlipped={isFlipped}
      />
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Enter your answer"
      />
      <button onClick={checkAnswer}>Submit</button>
      <p>{feedback}</p>
      <div className="navigation">
        <button onClick={previousCard} disabled={currentCard === 0}>
          Back
        </button>
        <button
          onClick={nextCard}
          disabled={currentCard === flashcardsData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
