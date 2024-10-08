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

  return (
    <div className="app">
      <Flashcard
        front={flashcardsData[currentCard].front}
        back={flashcardsData[currentCard].back}
        onFlip={handleFlip}
        isFlipped={isFlipped}
      />
    </div>
  );
};

export default App;
