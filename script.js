// Slumpmässigt nummer mellan 0 och 100
const randomNumber = Math.floor(Math.random()*101);
// Antalet gissningar användaren får gissa
let count = 5; 

// Visar ett meddelande för användaren efter angivet tal
function showMessage(messageFeedback) {
  document.getElementById('messageFeedback').innerText = messageFeedback; 
}

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const guessList = (document.getElementById('guessList'));
  const showGuess = document.createElement('li'); 


  if (count === randomNumber) {
    showMessage('Grattis! Du gissade rätt nummer!');
  } else if (count < 0 || count > 100 || isNaN(count)) {
    showMessage('Du måste ange ett nummer mellan 0 till 100.');
  } else if (count < randomNumber) {
    showMessage('Talet är för litet. Gissa högre!');
  } else {
    showMessage('Talet är för högt. Gissa lägre!');
  }

  showGuess.textContent =`${count}`;
  guessList.appendChild(showGuess);

  count--;

  if (count === 0) {
    showMessage(`Tyvärr, du har använt upp alla dina gissningar. Rätt nummer var ${randomNumber}.`);
    disableInput();
  }
} 

function disableInput() {
  document.getElementById('guessInput').disabled = true; // Avaktiverar gissningsinputfältet
}
