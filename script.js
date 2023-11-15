// Generera ett slumpmässigt nummer mellan 0 och 100
const randomNumber = Math.floor(Math.random() * 101);

// Antal chanser spelaren har
let chances = 10;

function checkGuess() {
  // Hämta användarens gissning från en input i HTML-dokumentet
  const guess = parseInt(document.getElementById('guessInput').value);
  // Hämta en referens till en lista där gissningar kommer att visas
  const guessList = document.getElementById('guessList');
  // Skapa ett nytt listelement för att visa användarens senaste gissning
  const listItem = document.createElement('li');
  
  // Kolla om användaren har gissat rätt, för lågt, för högt eller angett ogiltigt nummer
  if (guess === randomNumber) {
    showMessage('Grattis! Du har gissat rätt nummer!');
  } else if (guess < randomNumber && guess > 0) {
    showMessage('Talet är för lågt. Försök igen!');
  } else if (guess > randomNumber && guess < 100) {
    showMessage('Talet är för högt. Försök igen!');
  } else {
    showMessage('Vänligen ange ett nummer mellan 0 och 100.');
  }

  // Lägg till användarens gissning i listan
  listItem.textContent = `Gissning: ${guess}`;
  guessList.appendChild(listItem);

  // Minska antalet kvarvarande chanser efter varje gissning
  chances--;

  // Om användaren har använt alla chanser, visa det vinnande numret och avaktivera inputfältet
  if (chances === 0) {
    showMessage(`Tyvärr, du har använt alla dina chanser. Rätt nummer var ${randomNumber}.`);
    disableInput();
  }
}

// Funktion för att visa meddelanden till användaren
function showMessage(message) {
  document.getElementById('message').innerText = message;
}

// Funktion för att avaktivera gissningsinput när spelet är slut
function disableInput() {
  document.getElementById('guessInput').disabled = true;
}
