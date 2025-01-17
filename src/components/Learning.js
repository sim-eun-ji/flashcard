import './Learning.css';
import { useState } from "react";

const Learning = ({ flashcards, onExit, onResult }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIdx + 1 < flashcards.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onResult();
    }
  };

  return (
    <div className="learning">
      <h2>{`${currentIdx + 1} / ${flashcards.length}`}</h2>
        <div className="bg-color">
          <h3>질문</h3>
          <p>{flashcards[currentIdx].question}</p>
        </div>
        <h3 className="answer">답변</h3>
        {showAnswer && <p>{flashcards[currentIdx].answer}</p>}
        <div className="btn">
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "답변 닫기" : "답변 보기"}
          </button>
          <button onClick={handleNext}>다음 카드</button>
        </div>
        <button onClick={onExit}>학습 종료</button>
    </div>
  );
};

export default Learning;