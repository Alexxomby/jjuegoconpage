
export class UI{
    constructor(){
    }

    /**
     * 
     * @param {String} text pregunta a procesar
     */
    showQuestion(text){

        const questionTitle =document.getElementById('question');
        questionTitle.innerText = text;

    }

    /**
     * 
     * @param {string[]} choices opciones de las preguntas
     */
    showChoices(choices, callback){
        
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = '';

        for (let i = 0; i < choices.length; i++){

            const buton = document.createElement("button");
            buton.innerText = choices[i];
            buton.className = 'button';
            buton.addEventListener('click', () => callback(choices[i]));

            choicesContainer.append(buton);
        }
    }

    /**
     * 
     * @param {numero} scorepos 
     */
    showScores(scorepos,scoreneg){

        const quizEndHTML = `
            <h1> Resultado </h1>
            <h2>Tu puntuacion: ${scorepos}</h2>
            <h2>Tu puntuacion mala: ${scoreneg}</h2>
            <button>
            <a href="parte2.html">partedos</a></button>
            `;

        const element = document.getElementById("quiz");

        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {numero} currentIndex the courrent index of the quiz
     * @param { numero} total the total questions
     */
    showProgress(currentIndex, total){

        const element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    
    }

}