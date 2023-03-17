
export class Question {
    /**
     * 
     * @param {string} text el texto de la pregunta
     * @param {string[]} choices las opciones de las preguntas
     * @param {string} answer esta es la buena
     */

    constructor(text,choices,answer){/**propiedades */
        this.text =text;
        this.choices = choices;
        this.answer =answer;
    }
    //metodos
    /**
     * 
     * @param {string} choices las opciones de las preguntas
     * @returns {boolean} regreas cerdadero si la respuesta es correcta
     */
    respuestaCock(choice){
        return choice === this.answer;
    }
}

