// ------------------------------
// QUESTION BANK
// ------------------------------
const questionBank = {
  pillars: [
    {
      question: "How many pillars are there in Islam?",
      options: ["3", "4", "5", "6"],
      correct: 2,
      explanation:
        "Islam has 5 pillars: Shahada, Salah, Zakat, Sawm, and Hajj.",
    },
    {
      question: "Which of these is the first pillar of Islam?",
      options: ["Salah", "Shahada", "Zakat", "Sawm"],
      correct: 1,
      explanation: "The first pillar is Shahada — declaration of faith.",
    },
    {
      question: "Which pillar requires Muslims to pray 5 times a day?",
      options: ["Zakat", "Hajj", "Salah", "Sawm"],
      correct: 2,
      explanation: "Salah refers to the 5 obligatory daily prayers.",
    },
    {
      question: "What is the Arabic word for fasting?",
      options: ["Zakat", "Sawm", "Salah", "Hajj"],
      correct: 1,
      explanation: "Sawm means fasting during Ramadan.",
    },
    {
      question: "Which pillar involves giving charity?",
      options: ["Shahada", "Salah", "Zakat", "Hajj"],
      correct: 2,
      explanation: "Zakat is compulsory charity.",
    },
    {
      question:
        "Which pillar of Islam becomes obligatory only once in a lifetime if certain conditions are met?",
      options: ["Salah", "Zakat", "Sawm", "Hajj"],
      correct: 3,
      explanation:
        "Hajj is obligatory once in a lifetime for Muslims who are physically and financially able.",
    },
    {
      question:
        "What is the minimum percentage (Nisab rate) given in Zakat on savings?",
      options: ["1.5%", "2%", "2.5%", "5%"],
      correct: 2,
      explanation:
        "Zakat on savings is paid at the rate of 2.5% once the Nisab threshold is reached.",
    },
    {
      question: "Which pillar of Islam was made obligatory first?",
      options: ["Zakat", "Salah", "Hajj", "Sawm"],
      correct: 1,
      explanation:
        "Salah was made obligatory first during the event of Isra and Mi'raj.",
    },
    {
      question:
        "Which pillar can be performed in secret without others knowing, yet still fulfills its obligation?",
      options: [
        "Salah (Prayer)",
        "Shahada (Faith)",
        "Zakat (Charity)",
        "Sawm (Fasting)",
      ],
      correct: 2,
      explanation:
        "Zakat and other charitable acts can be given in secret, and the obligation is fulfilled. Public display is not required for the validity of the pillar.",
    },
    {
      question:
        "During which pillar is intention (niyyah) crucial, and mere physical action without sincerity invalidates it?",
      options: [
        "Salah (Prayer)",
        "Zakat (Charity)",
        "Hajj (Pilgrimage)",
        "Sawm (Fasting)",
      ],
      correct: 2,
      explanation:
        "All acts of worship require intention, but Hajj especially emphasizes niyyah because it involves a complex set of rites performed for Allah alone.",
    },
  ],

  prophets: [
    {
      question: "Who was the first prophet of Islam?",
      options: [
        "Prophet Ibrahim (AS)",
        "Prophet Adam (AS)",
        "Prophet Nuh (AS)",
        "Prophet Idris (AS)",
      ],
      correct: 1,
      explanation: "Prophet Adam (AS) was the first human and first prophet.",
    },
    {
      question: "Which prophet built the Kaaba with his son?",
      options: [
        "Prophet Nuh (AS)",
        "Prophet Ibrahim (AS)",
        "Prophet Musa (AS)",
        "Prophet Dawud (AS)",
      ],
      correct: 1,
      explanation:
        "Prophet Ibrahim (AS) and his son Ismail (AS) rebuilt the Kaaba.",
    },
    {
      question: "Prophet Muhammad (PBUH) was born in which city?",
      options: ["Madina", "Taif", "Makkah", "Jerusalem"],
      correct: 2,
      explanation: "Prophet Muhammad (PBUH) was born in Makkah.",
    },
    {
      question: "Which prophet built the Ark?",
      options: [
        "Prophet Isa (AS)",
        "Prophet Yusuf (AS)",
        "Prophet Nuh (AS)",
        "Prophet Musa (AS)",
      ],
      correct: 2,
      explanation: "Prophet Nuh (AS) built the Ark.",
    },
    {
      question: "Which prophet was given the miracle of speaking in infancy?",
      options: [
        "Prophet Muhammad (PBUH)",
        "Prophet Isa (AS)",
        "Prophet Musa (AS)",
        "Prophet Yusuf (AS)",
      ],
      correct: 1,
      explanation: "Prophet Isa (AS) spoke as a newborn by Allah’s command.",
    },
    {
      question: "Which prophet was given the Zabur (Psalms) by Allah?",
      options: [
        "Prophet Musa (AS)",
        "Prophet Isa (AS)",
        "Prophet Dawud (AS)",
        "Prophet Sulaiman (AS)",
      ],
      correct: 2,
      explanation: "Prophet Dawud (AS) was given the Zabur (Psalms).",
    },
    {
      question:
        "Which prophet was known for his exceptional patience despite severe trials?",
      options: [
        "Prophet Yaqub (AS)",
        "Prophet Ayyub (AS)",
        "Prophet Yunus (AS)",
        "Prophet Hud (AS)",
      ],
      correct: 1,
      explanation:
        "Prophet Ayyub (AS) is the greatest example of patience in Islam.",
    },
    {
      question:
        "Which Prophet is known as 'Kalimullah' (the one who spoke directly to Allah)?",
      options: [
        "Prophet Ibrahim (AS)",
        "Prophet Musa (AS)",
        "Prophet Isa (AS)",
        "Prophet Nuh (AS)",
      ],
      correct: 1,
      explanation:
        "Prophet Musa (AS) is called Kalimullah because Allah spoke to him directly.",
    },
    {
      question:
        "Which Prophet was swallowed by a fish and later saved by Allah?",
      options: [
        "Prophet Yunus (AS)",
        "Prophet Nuh (AS)",
        "Prophet Hud (AS)",
        "Prophet Salih (AS)",
      ],
      correct: 0,
      explanation:
        "Prophet Yunus (AS) was swallowed by a fish and later rescued by Allah.",
    },
    {
      question: "Which Prophet is known as the father of many Prophets?",
      options: [
        "Prophet Adam (AS)",
        "Prophet Ibrahim (AS)",
        "Prophet Yaqub (AS)",
        "Prophet Dawood (AS)",
      ],
      correct: 1,
      explanation:
        "Prophet Ibrahim (AS) is known as the father of many Prophets.",
    },
  ],

  quran: [
    {
      question: "How many Surahs are in the Quran?",
      options: ["100", "110", "114", "120"],
      correct: 2,
      explanation: "There are 114 Surahs in the Holy Quran.",
    },
    {
      question: "Which Surah is known as the heart of the Quran?",
      options: ["Surah Yaseen", "Surah Baqarah", "Surah Ikhlas", "Surah Mulk"],
      correct: 0,
      explanation: "Surah Yaseen is called the heart of the Quran.",
    },
    {
      question: "Which Surah is the longest in the Quran?",
      options: ["Al-Imran", "Al-Fatiha", "Al-Baqarah", "An-Nisa"],
      correct: 2,
      explanation: "Surah Al-Baqarah is the longest Surah.",
    },
    {
      question: "Which Surah was revealed first?",
      options: ["Al-Fatiha", "Al-Baqarah", "Al-Alaq", "Al-Kafirun"],
      correct: 2,
      explanation: "Surah Al-Alaq (Iqra) was the first revealed.",
    },
    {
      question: "Which Surah is the shortest in the Quran?",
      options: [
        "Surah Al-Falaq",
        "Surah Al-Asr",
        "Surah Al-Ikhlas",
        "Surah Al-Kausar",
      ],
      correct: 3,
      explanation: "Surah Al-Kawthar is the shortest Surah in the Quran.",
    },
    {
      question: "In which language was the Holy Quran revealed?",
      options: ["Hebrew", "Aramaic", "Arabic", "Syriac"],
      correct: 2,
      explanation: "The Holy Quran was revealed in Arabic.",
    },
    {
      question:
        "Which Surah begins without the phrase 'Bismillah ir-Rahman ir-Raheem'?",
      options: [
        "Surah Al-Anfal",
        "Surah At-Tawbah",
        "Surah Al-Ma'idah",
        "Surah Al-A'raf",
      ],
      correct: 1,
      explanation: "Surah At-Tawbah does not begin with Bismillah.",
    },
    {
      question: "Which Surah was revealed completely at once and not in parts?",
      options: [
        "Surah Al-Fatiha",
        "Surah Al-An'am",
        "Surah Al-Baqarah",
        "Surah Ya-Sin",
      ],
      correct: 1,
      explanation:
        "Surah Al-An'am was revealed completely at once, unlike most Surahs which were revealed in parts.",
    },
    {
      question: "What is the name of the longest verse in the Holy Quran?",
      options: ["Ayat-ul-Kursi", "Ayat-e-Sawm", "Ayat-ud-Dayn", "Ayat-ul-Birr"],
      correct: 2,
      explanation:
        "Ayat-ud-Dayn (Surah Al-Baqarah 2:282) is the longest verse in the Quran.",
    },
    {
      question: "How many Makki Surahs are there in the Holy Quran?",
      options: ["82", "84", "86", "88"],
      correct: 1,
      explanation: "There are 84 Makki Surahs in the Holy Quran.",
    },
  ],
};

// ------------------------------
// QUIZ STATE VARIABLES
// ------------------------------
let currentCategory = "";
let currentIndex = 0;
let score = 0;
let totalQuestions = 0;
let selectedCategory = "";
let userAnswers = [];
let timeLeft = 10;
let timerInterval;

// ------------------------------
// DOM ELEMENTS
// ------------------------------
const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const questionCounter = document.getElementById("questionCounter");
const categoryTitle = document.getElementById("categoryTitle");
const finalScore = document.getElementById("finalScore");
const highScoreText = document.getElementById("highScoreText");

// ------------------------------
// START QUIZ
// ------------------------------
function startQuiz() {
  const category = selectedCategory;
  currentCategory = category;
  currentIndex = 0;
  score = 0;

  const questions = questionBank[category];
  totalQuestions = questions.length;

  categoryTitle.innerText = category.toUpperCase();

  welcomeScreen.classList.add("d-none");
  quizScreen.classList.remove("d-none");

  displayQuestion();
}

function selectCategory(category) {
  selectedCategory = category;

  // Show Start Quiz button
  document.getElementById("startQuizBtn").classList.remove("d-none");

  // Optional: highlight selected button
  const btns = document.querySelectorAll(".category-btn");
  btns.forEach((btn) => btn.classList.remove("active-category"));

  event.target.classList.add("active-category");
}

function startTimer() {
  clearInterval(timerInterval);

  const timerEl = document.getElementById("timer");
  timeLeft = 10;
  timerEl.innerText = `Time Left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  const questions = questionBank[currentCategory];
  const q = questions[currentIndex];

  userAnswers[currentIndex] = null;

  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => btn.classList.add("disabled"));

  // Highlight correct answer
  allBtns[q.correct].classList.add("correct");

  // Show explanation
  const explanationBox = document.getElementById("explanationBox");
  explanationBox.innerText = q.explanation;
  explanationBox.classList.remove("d-none");

  nextBtn.classList.remove("d-none");
}

// ------------------------------
// DISPLAY QUESTION
// ------------------------------
function displayQuestion() {
  // Hide explanation box when loading next question
  const explanationBox = document.getElementById("explanationBox");
  explanationBox.classList.add("d-none");
  explanationBox.innerText = "";

  const questions = questionBank[currentCategory];
  const q = questions[currentIndex];

  questionText.innerText = q.question;
  questionCounter.innerText = `Question ${
    currentIndex + 1
  } of ${totalQuestions}`;

  optionsContainer.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;
    btn.onclick = () => selectAnswer(i);
    optionsContainer.appendChild(btn);
  });

  nextBtn.classList.add("d-none");

  // Update progress bar
  let progress = (currentIndex / totalQuestions) * 100;
  progressBar.style.width = progress + "%";

  startTimer();
}

// ------------------------------
// SELECT ANSWER
// ------------------------------
function selectAnswer(selectedIndex) {
  clearInterval(timerInterval);

  userAnswers[currentIndex] = selectedIndex;

  const questions = questionBank[currentCategory];
  const q = questions[currentIndex];

  const allBtns = document.querySelectorAll(".option-btn");

  // Disable all buttons
  allBtns.forEach((btn) => btn.classList.add("disabled"));

  // Highlight correct/wrong
  if (selectedIndex === q.correct) {
    score++;
    allBtns[selectedIndex].classList.add("correct");
  } else {
    allBtns[selectedIndex].classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
  }

  // SHOW EXPLANATION
  const explanationBox = document.getElementById("explanationBox");
  explanationBox.innerText = q.explanation;
  explanationBox.classList.remove("d-none");

  // Show Next button
  nextBtn.classList.remove("d-none");
}

// ------------------------------
// NEXT QUESTION
// ------------------------------
function nextQuestion() {
  currentIndex++;

  if (currentIndex < totalQuestions) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// ------------------------------
// END QUIZ
// ------------------------------
function endQuiz() {
  clearInterval(timerInterval);

  quizScreen.classList.add("d-none");
  resultScreen.classList.remove("d-none");

  finalScore.innerText = `Your Score: ${score} / ${totalQuestions}`;

  saveHighScore(score, currentCategory);

  const highScores = loadHighScores();
  highScoreText.innerText = `Highest Score in this category: ${highScores[currentCategory]}`;

  showSummary();
}

//-------------------------------
// Show Summary
//-------------------------------
function showSummary() {
  const summaryContainer = document.getElementById("summaryContainer");
  summaryContainer.innerHTML = "";

  const questions = questionBank[currentCategory];

  questions.forEach((q, index) => {
    const userAnswerIndex = userAnswers[index];
    const isCorrect = userAnswerIndex === q.correct;

    const div = document.createElement("div");
    div.className = "mb-3 p-3 border rounded";

    div.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <p>
                <strong>Your Answer:</strong>
                <span style="color:${isCorrect ? "green" : "red"}">
                    ${q.options[userAnswerIndex] || "Not Answered"}
                </span>
            </p>
            <p><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
        `;

    summaryContainer.appendChild(div);
  });
}

// ------------------------------
// SAVE HIGH SCORE
// ------------------------------
function saveHighScore(score, category) {
  const highScores =
    JSON.parse(localStorage.getItem("IslamicQuizHighScores")) || {};

  if (!highScores[category] || score > highScores[category]) {
    highScores[category] = score;
    localStorage.setItem("IslamicQuizHighScores", JSON.stringify(highScores));
  }
}

function loadHighScores() {
  return JSON.parse(localStorage.getItem("IslamicQuizHighScores")) || {};
}

// ------------------------------
// RETRY QUIZ
// ------------------------------
function retryQuiz() {
  currentIndex = 0;
  score = 0;

  resultScreen.classList.add("d-none");
  quizScreen.classList.remove("d-none");

  displayQuestion();

  userAnswers = [];
}

// ------------------------------
// GO HOME
// ------------------------------
function goHome() {
  // Reset quiz state
  currentIndex = 0;
  score = 0;
  selectedCategory = "";

  // Hide all screens
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
  aboutSection.classList.add("d-none");
  scoreSection.classList.add("d-none");

  // Show welcome screen
  welcomeScreen.classList.remove("d-none");

  // Hide start quiz button
  document.getElementById("startQuizBtn").classList.add("d-none");

  // Remove active category highlight
  const btns = document.querySelectorAll(".category-btn");
  btns.forEach((btn) => btn.classList.remove("active-category"));

  // Reset progress bar
  progressBar.style.width = "0%";

  // Clear explanation box if exists
  const explanationBox = document.getElementById("explanationBox");
  if (explanationBox) {
    explanationBox.classList.add("d-none");
    explanationBox.innerText = "";
  }

  userAnswers = [];
}

// HOME BUTTON FUNCTIONALITY
document.getElementById("homeBtn").addEventListener("click", () => {
  // Hide all sections
  aboutSection.classList.add("d-none");
  scoreSection.classList.add("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");

  // Show home screen
  welcomeScreen.classList.remove("d-none");
});

// Show high scores when clicking "Scores" menu
document
  .querySelector('a[href="#scoreSection"]')
  .addEventListener("click", () => {
    const scores = loadHighScores();
    const scoreList = document.getElementById("scoreList");

    scoreList.innerHTML = "";

    for (const category in scores) {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.innerText = `${category.toUpperCase()}: ${scores[category]} points`;
      scoreList.appendChild(item);
    }

    // Show score section
    scoreSection.classList.remove("d-none");
    aboutSection.classList.add("d-none");
    welcomeScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  });

// Show "About This Quiz"
document
  .querySelector('a[href="#aboutSection"]')
  .addEventListener("click", () => {
    aboutSection.classList.remove("d-none");
    scoreSection.classList.add("d-none");
    welcomeScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  });

