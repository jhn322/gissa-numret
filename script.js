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
}

  if (guess === randomNumber) {
    showMessage('Grattis! Du gissade rätt nummer!');
  } else if (guess < 0 || guess > 100 || isNaN(guess)) {
    showMessage('Du måste ange ett nummer mellan 0 till 100.');
  } else if (guess < randomNumber) {
    showMessage('Talet är för litet. Gissa högre!');
  } else {
    showMessage('Talet är för högt. Gissa lägre!');
  }






  // if (guess === randomNumber) {
  //   showMessage('Grattis! Du har gissat rätt nummer!'); // Meddelande om rätt gissning
  // } else if (guess < 0 || guess > 100 || isNaN(guess)) {
  //   showMessage('Vänligen ange ett nummer mellan 0 och 100.'); // Meddelande om ogiltig gissning
  // } else {
  //   showMessage(guess < randomNumber ? 'Talet är för lågt. Försök igen!' : 'Talet är för högt. Försök igen!'); // Meddelande om gissningen är för låg eller för hög
  // }

  listItem.textContent = `Gissning: ${guess}`; // Visar användarens gissning i listan
  guessList.appendChild(listItem);

  count--; // Minskar antalet tillgängliga gissningar

  if (count === 0) {
    showMessage(`Tyvärr, du har använt alla dina chanser. Rätt nummer var ${randomNumber}.`); // Meddelande om slutet av gissningarna
    disableInput(); // Avaktiverar gissningsinputfältet
  }
}

function showMessage(messageFeedback) {
  document.getElementById('message').innerText = messageFeedback; // Visar meddelandet för användaren
}

function disableInput() {
  document.getElementById('guessInput').disabled = true; // Avaktiverar gissningsinputfältet
}


// listItem = showGuess