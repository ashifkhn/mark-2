const readlineSync=require('readline-sync')
var score=0

var userName=readlineSync.question("Welcome to The Marvel Quiz.\nEnter your Name to play: ")
console.log("Welcome!",userName)

function play(question,answer){
    var userAnswer =readlineSync.question(question)
    if(userAnswer===answer){
        console.log("Right Answer!")
        score++;
        console.log("Your score is:", score)
        console.log("--------------------------------------------------------------")
    }else{
        console.log("Wrong Answer!\n Your score is:",score)
        console.log("--------------------------------------------------------------")
    }
}

const highScore=[{
    name:'Ashif',
    score:'5'
},{
    name:'faiz',
    score:'4'
}
]

var questionBank=[{
    question:"What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? \n a.2005 \n b.2008 \n c.2010 \n d.2012 \n",
    answer:"b"
},{question:"What is the name of Thor’s hammer? \n a.Vanir \n b.Mjolnir \n c.Aesir \n d.Norn\n",
    answer:"b"
},{
    question:"What is Captain America's shield made of?\n a.Vibranium \n b.Adamantium \n c.Promethium \n d.Carbonadium \n",
answer: "a" },{
    question:"Who is killed by Loki in the Avengers? \n a.Maria Hill \n b.Nick Fury \n c.Agent Coulson \n d.Doctor Erik Selvig \n",
    answer:"c",
},{
   question: "What fake name does Natasha use when she first meets Tony? \n a.Natalie Rushman \n b.Natalia Romanoff \n c.Nicole Rohan \n d.Naya Rabe \n",
   answer:"a"
},{
    question:"Who is Black Panther’s sister?\n a.Okoye \n b.Nakia \n c.Ramonda \n d.Shuri ",
    answer:"d"
},
{
    question:"Who does the Mad Titan sacrifice to acquire the Soul Stone? \n a.Nebula \n b.Ebony Maw \n c.Cull Obsidian \n d.Gamora",
    answer:"d"
}]

for (i=0;i<questionBank.length;i++){
   var questionCount=questionBank[i]
    play(questionCount.question,questionCount.answer)
}

console.log("Your total score is: ",score)

// play("What is your name?","ashif")

console.log("Check out the high scores, if you should be there send me a screenshot and I'll update it:")

for (i=0;i<highScore.length;i++){
    var highscoreName=highScore[i].name
    var highScored=highScore[i].score
    console.log(highscoreName,highScored)
}


