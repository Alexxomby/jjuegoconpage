//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./modelo/Quiz.js";
import { UI } from "./modelo/UI.js";


const btnTutorial = document.getElementById("btn-tutorial");
const tutorial = document.getElementById("tutorial");

    btnTutorial.addEventListener("click", () => {
    tutorial.classList.toggle("mostrar");
});


/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object
 */
const renderPage =  (quiz,ui) =>{


    if(quiz.idEnded()){

        
        ui.showScores(quiz.scorepos,quiz.scoreneg);
       
        
    }else{

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) =>{

        quiz.guess(currentChoice)
        renderPage(quiz,ui)
        });

        ui.showProgress(quiz.questionIndex + 1 , quiz.questions.length);
    }
};


function main() {

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz,ui)
    
}

main();