import React, { useState } from "react";
import Flashcard from "./components/Flashcard";

const flashcardsData = [
  { front: "What is 2 + 2?", back: "4" },
  { front: "Capital of France?", back: "Paris" },
];

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

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

  const shuffleCards = () => {
    const shuffled = [...flashcardsData].sort(() => Math.random() - 0.5);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const checkAnswer = () => {
    if (
      userAnswer.toLowerCase() ===
      flashcardsData[currentCard].back.toLowerCase()
    ) {
      setFeedback("Correct!");
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) setLongestStreak(streak + 1);
    } else {
      setFeedback("Incorrect");
      setStreak(0);
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
      <p>Streak: {streak}</p>
      <p>Longest Streak: {longestStreak}</p>
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
      <button onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  );
};

export default App;
