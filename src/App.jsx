import React, { useState } from "react";
import Flashcard from "./components/Flashcard";

// Original flashcards data
const flashcardsData = [
  { front: "What is 2 + 2?", back: "4" },
  { front: "Capital of France?", back: "Paris" },
  { front: "What is the largest planet?", back: "Jupiter" },
  { front: "Who wrote 'Hamlet'?", back: "Shakespeare" },
  { front: "What is the boiling point of water in Celsius?", back: "100" },
  { front: "Who painted the Mona Lisa?", back: "Leonardo da Vinci" },
  { front: "What is the chemical symbol for gold?", back: "Au" },
  { front: "What is the tallest mountain in the world?", back: "Mount Everest" },
  { front: "What is the capital of Japan?", back: "Tokyo" },
  { front: "Which element has the atomic number 1?", back: "Hydrogen" },
  { front: "Who is the author of '1984'?", back: "George Orwell" },
  { front: "What is the capital of Italy?", back: "Rome" },
  { front: "What is the currency of the United States?", back: "Dollar" },
  { front: "What is the square root of 81?", back: "9" },
  { front: "Who developed the theory of relativity?", back: "Albert Einstein" },
  { front: "What is the smallest prime number?", back: "2" },
  { front: "What is the chemical formula for water?", back: "H2O" },
  { front: "What is the capital of Spain?", back: "Madrid" },
  { front: "Which planet is closest to the sun?", back: "Mercury" },
  { front: "Who discovered penicillin?", back: "Alexander Fleming" },
  { front: "What is the hardest natural substance on Earth?", back: "Diamond" },
  { front: "Who painted 'Starry Night'?", back: "Vincent van Gogh" },
  { front: "Which country hosted the 2016 Summer Olympics?", back: "Brazil" },
  { front: "What is the capital of Australia?", back: "Canberra" },
  { front: "What is the speed of light?", back: "299,792,458 m/s" },
];

const App = () => {
  // State to hold the list of cards and the current card index
  const [cards, setCards] = useState(flashcardsData);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Function to flip the card
  const handleFlip = () => setIsFlipped(!isFlipped);

  // Go to the next card
  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  // Go to the previous card
  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  // Shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setCurrentCard(0); // Reset to the first card in the shuffled deck
    setIsFlipped(false); // Make sure the card is not flipped after shuffling
  };

  // Check the user's answer
  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === cards[currentCard].back.toLowerCase()) {
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
        front={cards[currentCard].front}
        back={cards[currentCard].back}
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
          disabled={currentCard === cards.length - 1}
        >
          Next
        </button>
      </div>
      <button onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  );
};

export default App;
