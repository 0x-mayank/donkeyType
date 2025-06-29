const wordList = [
  // 4-letter words
  'acid', 'barn', 'calm', 'dare', 'echo', 'fork', 'gold', 'hawk', 'icon', 'jade',
  'kite', 'lamp', 'maze', 'nail', 'oval', 'peak', 'quiz', 'rope', 'sail', 'tale',
  'unit', 'vase', 'wave', 'yoga', 'zone', 'beam', 'cage', 'dice', 'epic', 'fire',
  'gear', 'halt', 'inch', 'jazz', 'knee', 'leaf', 'mint', 'noon', 'oath', 'pond',
  'quit', 'rush', 'spin', 'tide', 'urge', 'vine', 'wool', 'zero', 'arch', 'bulk',
  'chip', 'dock', 'edge', 'film', 'grip', 'hill', 'iris', 'joke', 'kick', 'lock',
  'milk', 'nest', 'open', 'pull', 'ring', 'sock', 'torn', 'ugly', 'vast', 'warm',
  'yarn', 'axis', 'bond', 'cube', 'drum', 'emit', 'flux', 'glow', 'hunt', 'jump',
  'knot', 'lens', 'mesh', 'node', 'pack',
  
  // 5-letter words
  'apple', 'beach', 'chair', 'dream', 'empty', 'frost', 'grape', 'heart', 'ivory', 'judge',
  'knife', 'lemon', 'maple', 'novel', 'ocean', 'piano', 'quiet', 'river', 'smile', 'toast',
  'ultra', 'voice', 'wheat', 'youth', 'zebra', 'brave', 'climb', 'dance', 'eagle', 'flame',
  'ghost', 'happy', 'image', 'joint', 'laugh', 'magic', 'north', 'order', 'peace', 'queen',
  'robot', 'storm', 'trust', 'uncle', 'virus', 'whale', 'xenon', 'yearn', 'zesty', 'awake',
  'blaze', 'crisp', 'dodge', 'entry', 'fresh', 'giant', 'honor', 'index', 'joker', 'kayak',
  'loyal', 'melon', 'noble', 'orbit', 'pinch', 'quake', 'reign', 'swift', 'touch', 'unite',
  'vivid', 'worth', 'youth', 'amber', 'blade', 'crack', 'depth', 'elder', 'fable', 'grace',
  'house', 'ideal', 'jewel', 'karma', 'lunar', 'movie', 'naval', 'olive', 'pride', 'quest',
  'rapid', 'shade', 'tribe', 'urban', 'value', 'world', 'yield', 'bloom', 'crown', 'drive',
  'event', 'field', 'grant', 'hotel', 'inlet', 'jumbo', 'kiosk', 'layer', 'medal', 'nurse',
  'ozone', 'plume', 'quilt', 'ranch', 'spark', 'trend', 'ultra', 'venue', 'width', 'xenon',
  'yacht', 'zebra', 'aisle', 'bench', 'coral', 'delta', 'extra', 'fleet', 'globe', 'hinge',
  'intro', 'jelly', 'knelt', 'logic', 'march', 'nerdy', 'orbit', 'pearl',
  
  // 6-letter words
  'agenda', 'bridge', 'castle', 'dinner', 'engine', 'forest', 'garden', 'hammer', 'island', 'jungle',
  'knight', 'ladder', 'marble', 'notion', 'office', 'pencil', 'quarry', 'rabbit', 'shadow', 'tunnel',
  'urgent', 'valley', 'window', 'yellow', 'zipper', 'anchor', 'bottle', 'canvas', 'double', 'eleven',
  'finger', 'galaxy', 'hollow', 'impact', 'jacket', 'kernel', 'leader', 'moment', 'nephew', 'oxygen',
  'pickle', 'quiver', 'rubber', 'silver', 'temple', 'unique', 'volume', 'winter', 'xander', 'yogurt',
  'zipper', 'absurd', 'bronze', 'corner', 'donate', 'eleven', 'frozen', 'gather', 'helmet', 'insect',
  'jovial', 'keeper', 'launch', 'medium', 'nephew', 'octane', 'polish', 'quarry', 'reward', 'sister',
  'twelve', 'upward', 'vendor', 'wealth', 'xenial', 'yellow', 'zephyr', 'athlete', 'belong', 'collar',
  'dragon', 'effort', 'fabric', 'gentle', 'hamper', 'impact', 'jacket', 'kettle', 'legend', 'morale',
  'nature', 'obtain', 'public', 'recipe', 'symbol', 'thread', 'unlock', 'violet', 'wisdom', 'bronze',
  'carbon', 'decide', 'energy', 'factor', 'global', 'handle', 'intact', 'junior', 'kindle', 'lizard',
  'margin', 'noodle', 'origin', 'puzzle', 'quench', 'rescue', 'sphere', 'timing', 'united', 'vessel',
  'weapon', 'extend', 'yellow', 'zombie'
];


let selectedTime = 15;
let timeLeft = selectedTime;
let isGameActive = false;
let isGameFocused = false;
let currentWordIndex = 0;
let currentCharIndex = 0;
let correctChars = 0;
let totalChars = 0;
let correctWords = 0;
let totalWords = 0;
let gameWords = [];
let gameTimer = null;
let startTime = null;

function initGame() {
  generateWords();
  renderText();
  resetStats();
  updateCursor();
  updateProgress();
}

function generateWords() {
  gameWords = [];
  for (let i = 0; i < 500; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    gameWords.push(wordList[randomIndex]);
  }
}

function renderText() {
  const textLines = document.getElementById('text-lines');
  textLines.innerHTML = '';

  let wordCount = 0;
  const lineLimit = 10;

  while (wordCount < gameWords.length && textLines.children.length < lineLimit) {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'text-line';
    lineDiv.style.display = 'flex';
    lineDiv.style.flexWrap = 'wrap';
    lineDiv.style.gap = '8px';

    let lineWordCount = 0;

    while (wordCount < gameWords.length && lineWordCount < 20) {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.setAttribute('data-word-index', wordCount);

      const word = gameWords[wordCount];

      for (let j = 0; j < word.length; j++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.setAttribute('data-char-index', j);
        charSpan.textContent = word[j];
        wordSpan.appendChild(charSpan);
      }

      lineDiv.appendChild(wordSpan);
      wordCount++;
      lineWordCount++;
    }

    textLines.appendChild(lineDiv);
  }
}

function checkLineProgression() {
  const textLines = document.getElementById('text-lines');
  const currentWordElement = document.querySelector(`[data-word-index="${currentWordIndex}"]`);
  if (!currentWordElement) return;

  const lines = Array.from(textLines.children);
  let currentLineIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].contains(currentWordElement)) {
      currentLineIndex = i;
      break;
    }
  }

  if (currentLineIndex === -1) return;

  const lineHeight = lines[0]?.offsetHeight || 0;
  if (currentLineIndex >= 1) {
    const scrollY = currentLineIndex * lineHeight;
    textLines.style.transform = `translateY(-${scrollY}px)`;
  } else {
    textLines.style.transform = `translateY(0px)`;
  }
}

function updateCursor() {
  document.querySelectorAll('.char.current').forEach(c => c.classList.remove('current'));
  const currentWord = document.querySelector(`[data-word-index="${currentWordIndex}"]`);
  if (!currentWord) return;
  const currentChar = currentWord.querySelector(`[data-char-index="${currentCharIndex}"]`);
  if (currentChar) currentChar.classList.add('current');
}

function handleKeyPress(e) {
  if (!isGameFocused || (isGameActive === false && startTime !== null)) return;

  e.preventDefault();

  if (!isGameActive) {
    isGameActive = true;
    startTimer();
  }

  const currentChar = document.querySelector('.char.current');
  if (currentChar) {
    currentChar.classList.add('pulse');
    setTimeout(() => currentChar.classList.remove('pulse'), 300);
  }

  const key = e.key;
  if (key === 'Backspace') handleBackspace();
  else if (key === ' ') handleSpace();
  else if (key.length === 1 && /^[a-zA-Z]$/.test(key)) handleCharacter(key.toLowerCase());

  updateCursor();
  updateStats();
  updateProgress();
}

function handleCharacter(char) {
  const currentWord = gameWords[currentWordIndex];
  if (currentCharIndex >= currentWord.length) return;
  const charElement = document.querySelector(`[data-word-index="${currentWordIndex}"] [data-char-index="${currentCharIndex}"]`);
  totalChars++;
  if (char === currentWord[currentCharIndex]) {
    charElement.classList.add('correct');
    correctChars++;
  } else {
    charElement.classList.add('incorrect');
  }
  currentCharIndex++;
}

function handleSpace() {
  const currentWord = gameWords[currentWordIndex];
  let wordCorrect = true;

  if (currentCharIndex === currentWord.length) {
    for (let i = 0; i < currentWord.length; i++) {
      const charElement = document.querySelector(`[data-word-index="${currentWordIndex}"] [data-char-index="${i}"]`);
      if (!charElement.classList.contains('correct')) {
        wordCorrect = false;
        break;
      }
    }
    if (wordCorrect) correctWords++;
  } else {
    for (let i = currentCharIndex; i < currentWord.length; i++) {
      const charElement = document.querySelector(`[data-word-index="${currentWordIndex}"] [data-char-index="${i}"]`);
      charElement.classList.add('incorrect');
      totalChars++;
    }
  }

  totalWords++;
  currentWordIndex++;
  currentCharIndex = 0;
  checkLineProgression();
}

function handleBackspace() {
  if (currentCharIndex > 0) {
    currentCharIndex--;
    const charElement = document.querySelector(`[data-word-index="${currentWordIndex}"] [data-char-index="${currentCharIndex}"]`);
    if (charElement.classList.contains('correct')) correctChars--;
    if (charElement.classList.contains('correct') || charElement.classList.contains('incorrect')) totalChars--;
    charElement.classList.remove('correct', 'incorrect');
  } else if (currentWordIndex > 0) {
    currentWordIndex--;
    currentCharIndex = gameWords[currentWordIndex].length;
  }
}

function updateStats() {
  const wpmDisplay = document.getElementById('wpm-display');
  const accuracyDisplay = document.getElementById('accuracy-display');
  if (!startTime) return;
  const timeElapsed = (Date.now() - startTime) / 1000 / 60;
  const wpm = timeElapsed > 0 ? Math.round(correctWords / timeElapsed) : 0;
  const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
  wpmDisplay.textContent = wpm;
  accuracyDisplay.textContent = accuracy + '%';
}

function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const progress = (currentWordIndex / gameWords.length) * 100;
  progressFill.style.width = Math.min(progress, 100) + '%';
}

function resetStats() {
  const timeDisplay = document.getElementById('time-display');
  const wpmDisplay = document.getElementById('wpm-display');
  const accuracyDisplay = document.getElementById('accuracy-display');
  const progressFill = document.getElementById('progress-fill');

  timeLeft = selectedTime;
  currentWordIndex = 0;
  currentCharIndex = 0;
  correctChars = 0;
  totalChars = 0;
  correctWords = 0;
  totalWords = 0;
  startTime = null;

  timeDisplay.textContent = selectedTime;
  wpmDisplay.textContent = '0';
  accuracyDisplay.textContent = '0%';
  progressFill.style.width = '0%';
}

function startTimer() {
  const timeDisplay = document.getElementById('time-display');
  if (gameTimer) clearInterval(gameTimer);
  startTime = Date.now();
  gameTimer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function endGame() {
  isGameActive = false;
  clearInterval(gameTimer);
  showResults();
}

function showResults() {
  const finalWpm = document.getElementById('final-wpm');
  const finalAccuracy = document.getElementById('final-accuracy');
  const resultsModal = document.getElementById('results-modal');
  const timeElapsed = selectedTime / 60;
  const wpm = Math.round(correctWords / timeElapsed);
  const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
  finalWpm.textContent = wpm;
  finalAccuracy.textContent = accuracy + '%';
  resultsModal.classList.add('show');
}

function closeModal() {
  const resultsModal = document.getElementById('results-modal');
  resultsModal.classList.remove('show');
  restartGame();
}

function restartGame() {
  const typingArea = document.getElementById('typing-area');
  const focusOverlay = document.getElementById('focus-overlay');
  const textLines = document.getElementById('text-lines');
  isGameActive = false;
  isGameFocused = false;
  clearInterval(gameTimer);
  typingArea.classList.add('blurred');
  focusOverlay.classList.remove('hidden');
  textLines.style.transform = 'translateY(0)';
  initGame();
}

function focusGame() {
  const typingArea = document.getElementById('typing-area');
  const focusOverlay = document.getElementById('focus-overlay');
  isGameFocused = true;
  focusOverlay.classList.add('hidden');
  typingArea.classList.remove('blurred');
}

function blurGame() {
  const typingArea = document.getElementById('typing-area');
  const focusOverlay = document.getElementById('focus-overlay');
  isGameFocused = false;
  focusOverlay.classList.remove('hidden');
  typingArea.classList.add('blurred');
}

document.addEventListener('keydown', handleKeyPress);
document.getElementById('focus-overlay').addEventListener('click', focusGame);
document.addEventListener('click', (e) => {
  const typingArea = document.getElementById('typing-area');
  if (typingArea.contains(e.target)) focusGame();
  else blurGame();
});
document.querySelectorAll('.timer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTime = parseInt(btn.getAttribute('data-time'));
    restartGame();
  });
});
document.querySelector('.restart-btn').addEventListener('click', restartGame);
document.getElementById('results-modal').addEventListener('click', (e) => {
  const modal = document.getElementById('results-modal');
  if (e.target === modal) closeModal();
});
window.addEventListener('load', () => {
  initGame();
  const typingArea = document.getElementById('typing-area');
  typingArea.classList.add('blurred');
});
window.addEventListener('resize', () => {
  renderText();
  updateCursor();
});
