const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const questionImage = document.getElementById('questionimg');
const nextButton = document.getElementById('next-button');
const resultModal = document.getElementById('resultModal');
const modalScore = document.getElementById('modalScore');
const closeModal = document.getElementById('closeModal');

let currentQuestion = 0;
let score = 0;
const shuffledQuestions = shuffleArray([
    // Define your questions and correct answers here
 
    { image: 'Images/Shapes/Circle/1.jpg', correctOption: 2 },
    { image: 'Images/Shapes/Square/2.jpg', correctOption: 1 },
    { image: 'Images/Shapes/Triangle/3.jpg', correctOption: 3 },
    { image: 'Images/Shapes/Circle/3.jpg', correctOption: 2 },
    { image: 'Images/Shapes/Square/2.jpg', correctOption: 1 },
    { image: 'Images/Shapes/Triangle/1.jpg', correctOption: 3 },
    { image: 'Images/Shapes/Circle/1.jpg', correctOption: 2 },
    { image: 'Images/Shapes/Square/4.jpg', correctOption: 1 },
    { image: 'Images/Shapes/Circle/5.jpg', correctOption: 2 },
    { image: 'Images/Shapes/Triangle/1.jpg', correctOption: 3 },
    { image: 'Images/Shapes/Circle/4.jpg', correctOption: 2 },
    { image: 'Images/Shapes/Square/3.jpg', correctOption: 1 }

    // ... Other questions ...
]);

function loadQuestion() {
    const question = shuffledQuestions[currentQuestion];
    if (question.answered) {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
        return;
    }

    questionImage.src = question.image;

    options.forEach((option, index) => {
        option.addEventListener('click', () => checkAnswer(index));
    });

    nextButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = shuffledQuestions[currentQuestion];
    if (question.answered) {
        return;
    }

    if (selectedIndex === question.correctOption - 1) {
        score++;
        scoreDisplay.textContent = score;
    }

    question.answered = true;
    loadQuestion();
}

function showResult() {
    questionImage.style.display = 'none';
    options.forEach(option => option.style.display = 'none');

    modalScore.textContent = `Total Score: ${score} / ${shuffledQuestions.length}`;
    resultModal.style.display = 'block';

    closeModal.addEventListener('click', () => {
        resultModal.style.display = 'none';
    });
}

loadQuestion();

nextButton.addEventListener('click', () => {
    if (currentQuestion < shuffledQuestions.length) {
        loadQuestion();
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}







function loadQuestion() {
    const question = SimpleQuestion[currentQuestion];
    total.textContent = SimpleQuestion.length
    done.textContent = currentQuestion
    console.log("score " + score + " current " + currentQuestion)

    if (currentQuestion === SimpleQuestion.length) {
        console.log("var gaye")
        return
    }
    else {
        questionImage.src = question.image;
        console.log("question source img " + questionImage.src)

        options.forEach((option, index) => {
            option.addEventListener('click', () => {
                console.log("clicked value "+ index)
                checkAnswer(index)
            });
        });

        nextButton.style.display = 'none';
    }

}
