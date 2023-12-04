// Slumpmässigt nummer mellan 0 och 100
let randomNumber = Math.floor(Math.random()*101);
// Antalet gissningar användaren får gissa
let count = 5; 
// variabel för att lagra originala färgen på knappen
let originalColor = '';

window.onload = function () {
  // Lagrar originella färgen på knappen
  originalColor = window.getComputedStyle(document.querySelector('.button-check')).backgroundColor;
}

// Visar ett meddelande för användaren efter angivet tal
function showMessage(messageFeedback) {
  document.getElementById('messageFeedback').innerText = messageFeedback; 
}

// Återställer antal gissnigar till 5
function resetGame() {
  count = 5;
  randomNumber = Math.floor(Math.random() * 101);
  // Visar meddelande på nytt
  showMessage('Guess a number between 0 to 100');
  // Slår på input för gissning
  document.getElementById('guessInput').disabled = false;
  // Tar bort tidigare gissningstext
  document.getElementById('messageFeedback').innerText = '';
  // Hämtar listan av gissningar
  const guessList = document.getElementById('guessList');
  // Rensar gissningar
  guessList.innerHTML = '';
  // Slår på knapp
  document.querySelector('.button-check').disabled = false;

  // Återställer tillbaka färgen på gissa knappen
  if (originalColor !== '') {
    document.querySelector('.button-check').style.backgroundColor = originalColor;
  }
}

function checkGuess() {
  // Funktion för att plocka gissningar från inputfältet
  const guess = Number(document.getElementById('guessInput').value);
  // Länkar till lista i HTML där gissningarna visas
  const guessList = (document.getElementById('guessList'));
  // Skapar ett nytt listelement för gissningarna
  const showGuess = document.createElement('li'); 

  // If-sats som meddelar användaren vid rätt & ogiltig samt om för låg eller hög inmatning
  if (guess === randomNumber) {
    showMessage('Congratulations! You guessed correctly!');
  } else if (guess < 0 || guess > 100 || isNaN(guess)) {
    showMessage('You need to specify a number between 0 to 100.');
  } else if (guess < randomNumber) {
    showMessage('The number is too low. Guess higher!');
  } else {
    showMessage('The number is too high. Guess lower!');
  }

  // Visar användarens gissning i listan under knappen
  showGuess.textContent =`${guess} ${guess < randomNumber ? '<' : guess > randomNumber ? '>' : ''}`;
  guessList.appendChild(showGuess);

  // Minskar antalet gissningar med 1
  count--;

  if (count === 0 && guess !== randomNumber) {
    showMessage(`Sorry, you've used up all your guesses. The correct number was ${randomNumber}.`);
    // Avaktiverar inputfältet
    disableInput();
    // Kontrollerar om originalColor är en tom sträng
    if (originalColor === '') {
      originalColor = window.getComputedStyle(document.querySelector('.button-check')).backgroundColor;
    }
    // Ändrar färgen på .button-check till grå
    document.querySelector('.button-check').style.backgroundColor = '#808080';
  }
}

  // Avslutar spelet
function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.querySelector('.button-check').disabled = true;
}