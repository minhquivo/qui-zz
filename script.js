const quiz_q = [
    {
        'Q' : 'Mean stack is a ____.',
        'A' : 'Angular-based framework',
        'B' : 'JavaScript-based framework',
        'C' : 'Python-based framework',
        'D' : 'Java-based framework',
        'correct' : 'B'
    },
    {
        'Q' : 'Mean stack is used for ____.',
        'A' : 'Deploying web applications',
        'B' : 'Developing ORM-based applications',
        'C' : 'Developing web applications',
        'D' : 'None of these',
        'correct' : 'C'
    },
    {
        'Q' : 'The M in MEAN stack stands for ____.',
        'A' : 'Mongoose',
        'B' : 'MySQL',
        'C' : 'MongoDB',
        'D' : 'Material.js',
        'correct' : 'C'
    },
    {
        'Q' : 'The E in MEAN stack stands for ____.',
        'A' : 'ES6.js',
        'B' : 'Express.js',
        'C' : 'Ember.js',
        'D' : 'Ext.js',
        'correct' : 'B'
    },
    {
        'Q' : 'The A in MEAN stack stands for ____.',
        'A' : 'Arango DB',
        'B' : 'AppML',
        'C' : 'Apache Tapestry',
        'D' : 'Angular.js',
        'correct' : 'D'
    },
    {
        'Q' : 'How many technologies make up the layers of the MEAN stack?',
        'A' : '7',
        'B' : '6',
        'C' : '5',
        'D' : '4',
        'correct' : 'D'
    },
    {
        'Q' : "The MEAN.JS boilerplate uses ____ as its web framework.",
        'A' : 'MongoDB',
        'B' : 'Express',
        'C' : 'Angular',
        'D' : 'Node',
        'correct' : 'B'
    },
    {
        'Q' : 'MongoDB stores data in which format?',
        'A' : 'Text',
        'B' : 'CSV',
        'C' : 'JSON',
        'D' : 'XLS',
        'correct' : 'C'
    },
    {
        'Q' : 'Which of the following provides a JavaScript runtime environment?',
        'A' : 'MongoDB',
        'B' : 'Express',
        'C' : 'Node',
        'D' : 'Angular',
        'correct' : 'C'
    },
    {
        'Q' : 'Which of the following company created Angular?',
        'A' : 'IBM',
        'B' : 'MIT',
        'C' : 'GOOGLE',
        'D' : 'MICROSOFT',
        'correct' : 'C'
    }
    // ,
    // {
    //     'Q' : '',
    //     'A' : '',
    //     'B' : '',
    //     'C' : '',
    //     'D' : '',
    //     'correct' : 'C'
    // }
]
let index = 0;
let total = quiz_q.length;
let right = 0;
let wrong = 0;
const quizQbox = document.getElementById('quizQbox');
const Qoption = document.querySelectorAll('.option');

const uploadQ = ()=>{
    if(index === total){
        return QuizEnd();
    }
    reset();
     const Qdata = quiz_q[index]
     quizQbox.innerText = `${index+1}. ${Qdata.Q}`
     Qoption[0].nextElementSibling.innerText = Qdata.A;
     Qoption[1].nextElementSibling.innerText = Qdata.B;
     Qoption[2].nextElementSibling.innerText = Qdata.C;
     Qoption[3].nextElementSibling.innerText = Qdata.D;
}
const QuizSubmit = () =>{
    const Qdata = quiz_q[index];
    const QAnswr = getAnswer()
    console.log(QAnswr,Qdata.correct)
    if(QAnswr==Qdata.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    uploadQ();
    return;
}
const reset = () =>{
    Qoption.forEach(
        (input) => {
            input.checked = false;
        }

)
}
const getAnswer = () =>{
    let answer;
    Qoption.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
                
            }
        
        }
    )
    return answer;  
}

const QuizEnd = ()=>{
    document.getElementById("container").innerHTML=`
    
    <center><img src="pngegg.png"><center>
    <br>
    <div style = "justify-content: center; font-size:30px;color:#2fa4db;">
    <center><h3>Thankyou for playing the Quiz</h3>
    <h2>${right}/${total}</h2></center>
    <div>`
}

uploadQ();
