//  R,S,T,L,N, or E
const availableCharacters = ['r', 's', 't', 'l', 'n', 'e']
const currentWord = getRandomWord();
console.log(currentWord)

// given a word
// return a string that has the same length
// and only contains dashes
function convertWordToDashes(word = '') {
  return '-'.repeat(word.length);
}

// given a word
// return a string that has the same length
// and only contains dashes and the available chars
function getDisplayWordWithAvailableChars(word) {
  let newWord = '';

  word.split('').forEach(char => {
    if (availableCharacters.includes(char)) {
      newWord += char.toUpperCase();
    } else {
      newWord += '-';
    }
  })

  return newWord;
}

function getEl(id) {
  return document.getElementById(id);
}

function addWordToWordContainer(text) {
  const wordContainer = document.getElementById('word-container')
  wordContainer.innerText = text;
}

function handleFirstFormSubmission(event) {
  event.preventDefault();
  clearErrorMsg();
  const formData = new FormData(event.target)
  const charInput = formData.get('character-input');

  const vowelMap = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
  }


  // what makes a valid statement
  // only letters
  // has 4 characters
  // contains 1 vowel
  // 3 constanants
  charInput.split('').forEach(char => {
    const letter = char.toLowerCase();

    if (letter in vowelMap) {
      vowelMap[letter]++;

      if (vowelMap[letter] > 1) {
        showErrorMsg('Too Many Vowels')
        return;
      }
    }
  })

  let newWord = '';

  currentWord.split('').forEach(char => {
    if (availableCharacters.includes(char) || charInput.includes(char)) {
      newWord += char.toUpperCase();
    } else {
      newWord += '-';
    }
  })

  addWordToWordContainer(newWord)

  // if we get here
  // check if the user has all the right chars
  // if so, tell them they won
  // if not, let them guess the word

  if (checkWordForDashes()) {
    promptForFinalGuess();
  } else {
    showWinMsg();
  }
}

function showWinMsg() {
  const el = getEl('result-container')

  el.innerHTML = `
    <p>You Guessed Correctly!</p>
  `
}

function handleFinalSubmission(e) {
  console.log(e)
  e.preventDefault();

  const formData = new FormData(e.target)
  const charInput = formData.get('character-input');

  if (charInput === currentWord) {
    showWinMsg()
  } else {
    showErrorMsg('you lost')
  }
}

function promptForFinalGuess() {
  const form = getEl('user-guess');
  const charInput = getEl('character-input');
  charInput.maxLength = currentWord.length;

  form.removeEventListener('submit', handleFirstFormSubmission)
  form.reset();

  form.addEventListener('submit', handleFinalSubmission)
}

// should return bool
function checkWordForDashes() {
  const updatedWord = getEl('word-container').innerText;

  return updatedWord.includes('-')
}

function clearErrorMsg() {
  const helpText = getEl('help-text')
  helpText.innerText = '';
}

function showErrorMsg(msg) {
  const helpText = getEl('help-text')
  helpText.innerText = msg;
}

function handleStartClick() {
  addWordToWordContainer(
    getDisplayWordWithAvailableChars(currentWord)
  )

  const gameContainer = getEl('game-container')

  gameContainer.innerHTML = `
    <form id="user-guess">
      <div>
        <label for="character-input">
          Guess 3 constanants and one vowel
        </label>
        <input id="character-input" maxlength="4" autofocus name="character-input" />
        <small id="help-text"></small>
      </div>
      <button type="submit">Guess</button>
    </form>
  `;

  const form = getEl('user-guess')
  form.addEventListener('submit', handleFirstFormSubmission)
}

function runProgram() {
  addWordToWordContainer(
    convertWordToDashes(currentWord)
  )

  const startButton = document.getElementById('start-btn')
  startButton.addEventListener('click', handleStartClick)
}

window.addEventListener('DOMContentLoaded', runProgram)

