const questions = [
    {
        question :'Сколько будет 2+2? ',
        answer: '4' ,
        type: 'prompt',
    },
    
    {
        question :'Солнце встает на востоке?',
        answer: 'Да',
        type: 'prompt',
    },

    {
        question :'Сколько будет 5 / 0?',
        answer: 'NaN',
        type: 'prompt',
    },

    {
        question :'Какого цвета небо?',
        answer: 'голубого',
        type: 'prompt',
    },
    {
        question :'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»',
        answer: '42',
        type: 'prompt',
    },
];

countQuestion(questions);


function countQuestion(quizQuestions) {
    let marks = 0;

    quizQuestions.forEach(
        (question) => marks += getAnswer(question) === question.answer ? 10 : 0)

        showResult(marks);
}


function getAnswer ({question, type}) {
    if (type === 'prompt') {
        return prompt(question);
    }
  
}

function showResult(marks) {
    alert(`Ваш балл: ${marks}`);
}

