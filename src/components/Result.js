import './Result.css';
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Result = ({ onExit }) => {
  // 폭죽 효과를 트리거하는 함수
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      startVelocity: 30,
      origin: { x: 0.5, y: 0.5 }, // 화면 중앙에서 폭죽 발생
      // colors: ['#ff0', '#0f0', '#00f'], // 색상 커스터마이징
    });
  };

  // 컴포넌트가 처음 렌더링될 때 폭죽 실행
  useEffect(() => {
    triggerConfetti();
  }, []); // 빈 배열을 두어 마운트 시 한 번만 실행

  return (
    <div className="result">
      <h2>학습종료</h2>
      <p>수고하셨습니다 :）</p>
      <img src="./pang.png" alt="picture1" height="300px" width="300px" />
      <button onClick={onExit}>처음으로 돌아가기</button>
    </div>
  );
};

export default Result;