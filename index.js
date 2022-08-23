// input element has an ID of guess
const guessInput = document.getElementById('guess');

//The button eleent as an ID of submit and the name of the button is submit guess
const submitButton = document.getElementById('submit');

//Reset button in the HTML document with the ID reset and the name is reset
const resetButton = document.getElementById('reset');

//All the elements with the ID Class name will be: 

const messages = document.getElementsByClassName('message');

//<p class="message" id="too-high">You guessed too high. Try again.</p>
const tooHighMessage = document.getElementById('too-high');

//<p class="message" id="too-low">You guessed too low. Try again.</p>
const tooLowMessage = document.getElementById('too-low');

//<p class="message" id="max-guesses">You reached the max number of guesses </p> */
const maxGuessesMessage = document.getElementById('max-guesses');

//<p class="message" id="number-of-guesses"></p>
//1. FIRST ERROR:changed the ID name to number
const numberOfGuessesMessage = document.getElementById('number-of-guesses');

//<p class="message" id="correct">Congratulations, You guessed correctly! <br>Would you like to play again?</p>
const correctMessage = document.getElementById('correct');

//NEW get elements by ID//
const over100= document.getElementById('over');
const under0 = document.getElementById('under');

//declaring the varioable targetNumber
let targetNumber;

//attempts start at 0 and max out at 5
//2. SECOND ERROR-CONST TO LET
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts++;

  //the function hideAllMessages is being called. The function is below. 
  hideAllMessages();

    //if the guess is greater than 99 display over100 Message and dont display the rest of the messages
    if(guess > 99) {
      over100.style.display = ''
      messages.style.display = 'none';
      submitButton.disabled = false;
      guessInput.disabled = false;
    
// if the guess is less than or 0 dusplay the under0 message
    } else if(guess <= 0 ) {
        under0.style.display = ''
        messages.style.display = 'none';
        submitButton.disabled = false;
        guessInput.disabled = false;
    }
 
//If the guessed number is equal to the target number  display the number of attempts, number of guessed correctly, and the submit button will be disabled as well as the input bar//
    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = '';
//element.innterHML = enables you to get or set actual HTML markup contained within an element. Therefore this is getting the number of attempts and displaying it. 
      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
// element with the ID correct
      correctMessage.style.display = '';
//.disabled: A disabled element is unusable and un-clickable, its will also be a boolean value. If its true then its disabled if its false then its not disabled. 
      submitButton.disabled = true;
      guessInput.disabled = true;
  }

//if the guess does not meet the targetNumber then youll have another try. MaxNumberof Attempts- the number of attempts you have made. 
    if (guess !== targetNumber) {
// if your guess is less than the target number then the too low message will appear
      if (guess < targetNumber) {
      tooLowMessage.style.display = '';
//3.THREE ERROR:CHANGED TO0HIGHMESSAGE
      } else {
      tooHighMessage.style.display = '';
      } 
    let remainingAttempts = maxNumberOfAttempts - attempts;
    //console.log(remainingAttempts);
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }



  //if the number of attempts reaches the max number of attempts the submit button will be disabled as well as the input bar
  //4. 4TH ERROR-DELETED AN =
    if (attempts === maxNumberOfAttempts) {
      maxGuessesMessage.style.display = '';
      tooHighMessage.style.display= 'none';
      tooLowMessage.style.display= 'none';
      submitButton.disabled = true;
      guessInput.disabled = true;
  }
  //input value is equal to what the user submits.
  guessInput.value = '';
  resetButton.style.display = '';
}

function hideAllMessages() {
//5. 5TH ERROR DELETED THE = FROM THE OPERATION: elementIndex < messages.length 
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
   messages[elementIndex].style.display = 'none';
  //console.log(messages[elementIndex])
  }
  over100.style.display = 'none';
  under0.style.display = 'none';
}

//6. 6TH ERROR: FIXED MISSPELLING
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  //console.log(`target number: ${targetNumber}`);

// Reset number of attempts
//7. 7TH ERROR: CHANGED THE MAXNUMBEROFATTEMPTS AND ADDED THE IF STATEMENT: If the max number of attempts are made then start the attmpts at 0

   if (maxNumberOfAttempts) {
      attempts = 0;
    }
  
  // Enable the input and submit button
  //8. 8TH ERROR: FIXED MISSPELLING
  submitButton.disabled = false;
  guessInput.disabled = false;



  hideAllMessages();
  resetButton.style.display = 'none';
}


submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

