// Slumpmässigt nummer mellan 0 och 100
const randomNumber = Math.floor(Math.random()*101);
// Antalet gissningar användaren får gissa
let count = 5; 

// Visar ett meddelande för användaren efter angivet tal
function showMessage(messageFeedback) {
  document.getElementById('messageFeedback').innerText = messageFeedback; 
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
    showMessage('Grattis! Du gissade rätt nummer!');
  } else if (guess < 0 || guess > 100 || isNaN(guess)) {
    showMessage('Du måste ange ett nummer mellan 0 till 100.');
  } else if (guess < randomNumber) {
    showMessage('Talet är för lågt. Gissa högre!');
  } else {
    showMessage('Talet är för högt. Gissa lägre!');
  }

  // Visar användarens gissning i listan under knappen
  showGuess.textContent =`${guess}`;
  guessList.appendChild(showGuess);

  // Minskar antalet gissningar med 1
  count--;

  // Om antalet gissningar uppnåt utan rätt svar anges detta
  if (count === 0 && guess !== randomNumber) {
    showMessage(`Tyvärr, du har använt upp alla dina gissningar. Rätt nummer var ${randomNumber}.`);
    // Avaktiverar inputfältet
    disableInput();
  }
  
  // Avslutar spelet
    function disableInput() {
    document.getElementById('guessInput').disabled = true; // Avaktiverar gissningsinputfältet
  }
} 
