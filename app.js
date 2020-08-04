let min = 1,
  max = 10,
  winningNumber = getRandomNumber(min, max),
  guessesLeft = 3;

  

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;
// console.log(maxNum, "queryselector")
// console.log(guessBtn, "queryselector")

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess, "number guessed")

  if(!guess){
      console.log("not a number")
      setMessage(`No number entered. Please enter a number between ${1} and ${10}`, "green");
  } else

  if (guess > max || guess < min) {
    setMessage(`Please enter a number between ${1} and ${10}`, "green");
  } else {
    if (guess === winningNumber) {
        guessInput.disabled = true;
        guessInput.style.borderColor = "green";
        setMessage(`${winningNumber} is correct! YOU WIN!`, "green");

        guessBtn.value = "Play Again";
          guessBtn.className += "play-again";
      } else {
        guessesLeft -= 1;
        if (guessesLeft === 1) {
            setMessage(
              `${guess} is wrong, ${guessesLeft} guess left. Please try again.`,
              "red"
            );
          } else 
    
        if (guessesLeft === 0) {
          guessInput.disabled = true;
          guessInput.style.borderColor = "red";
          setMessage(`Game Over, YOU LOST! The answer is ${winningNumber}`, "red");
    
          guessBtn.value = "Play Again";
          guessBtn.className += "play-again";
        } else {
          guessInput.style.borderColor = "red";
          setMessage(
            `${guess} is wrong, ${guessesLeft} guesses left. Please try again.`,
            "red"
          );
        }
      }
  }

  guessInput.value = "";
  
});

function getRandomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random, "random number");

  return random;
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
