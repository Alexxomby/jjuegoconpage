//@ts-check
import { Question } from "./Question.js"

export class Quiz {

    questionIndex = 0
    scorepos = 0   
    scoreneg = 0
    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} the question found
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    idEnded(){
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {String} answer 
     */
    guess(answer){

        if (this.getQuestionIndex().respuestaCock(answer)){
            //this.scorepos=1
            this.scorepos ++
            //this.scoreneg = 0
        }else{
            this.scoreneg ++
        }
        this.questionIndex++
    }
}
