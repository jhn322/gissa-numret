// Generera ett slumpmässigt nummer mellan 0 och 100
const randomNumber = Math.floor(Math.random() * 101);

// Antal chanser spelaren har
let chances = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);

  if (guess === randomNumber) {
    showMessage('Grattis! Du har gissat rätt nummer!');
  } else if (guess < randomNumber && guess > 0) {
    showMessage('Talet är för lågt. Försök igen!');
  } else if (guess > randomNumber && guess < 100) {
    showMessage('Talet är för högt. Försök igen!');
  } else {
    showMessage('Ange ett nummer mellan 0 och 100.');
  }

  chances--;

  if (chances === 0) {
    showMessage(`Tyvärr, dina gissningar är slut. Rätt nummer var ${randomNumber}.`);
    disableInput();
  }
}

function showMessage(message) {
  document.getElementById('message').innerText = message;
}

function disableInput() {
  document.getElementById('guessInput').disabled = true;
}
