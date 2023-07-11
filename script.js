// q1. 1-100까지의 랜덤한 숫자 (정수)를 반환하는 변수 randomNumber를 선언하고 초기화하세요
let randomNumber = Math.floor(Math.random() * 100) + 1;

// q2. DOM 요소 5가지를 선택해서 변수로 선언해주세요.
// guesses, lastResult, lowOrHigh, guessSubmit, guessField
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const quessField = document.querySelector('.guessField');

// q3. 변수 2가지를 선언(let)해주세요.
// guessCount 초기값1, resetButton 선언만
let guessCount = 1;
let resetButton;

// 올바른 번호인지 확인하는 함수를 만들기

function checkGuess(event) {
  // 기본값 막기
  event.preventDefault();
  // 사용자가 추측한 번호를 알아내는 변수 userGuess
  const userGuess = Number(guessField.value);
  // 제약사항 : 1~100 사이의 숫자로만 받기

  if (randomNumber === userGuess) {
    // 축하 메시지 표시
    lastResult.textContent = '축하합니다. 맞추셨습니다.';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Game Over';
    setGameOver();
  } else {
    // 플레이어에게 추측이 틀렸으며 값이 높거나 낮은지 알려줍니다.
    lastResult.textContent = '추측값이 틀립니다.';
    if (randomNumber > userGuess) {
      lowOrHigh.textContent = '더 높은 값입니다';
    } else {
      lowOrHigh.textContent = '더 낮은 값입니다';
    }
  }
  // guessCount를 1 증가시킵니다
  // guessCount = guessCount + 1;
  guessCount++;
  // guessCount += 1;
}

function setGameOver() {
  // 플레이어가 더 많은 추측을 입력할 수 없도록 합니다
  // 게임이 끝나는 로직
  // 추측창을 사용할 수 없게
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // 버튼 태그인 리셋버튼을 DOM요소로 생성해주세요.
  resetButton = document.createElement('button');
  // 생성한 DOM요소의 텍스트 컨텐츠를 "새 게임하기"로 변경합니다.
  resetButton.textContent = '새 게임하기';
  // 만든 DOM 버튼을 body태그 안에 추가합니다.
  document.body.appendChild(resetButton);
  lowOrHigh.textContent = `값은 ${randomNumber}입니다.`;
  // resetButton을 click했을 때 새 게임이 되게하는 리스너를 추가하기, 함수이름은 resetGame
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  lowOrHigh.textContent = '';
  guessField.value = '';
  lastResult.textContent = '';
}
// 이벤트 리스너 만들기 click 했을 때 checkGuess 함수를 실행하는 리스너 추가
guessSubmit.addEventListener('click', checkGuess);
