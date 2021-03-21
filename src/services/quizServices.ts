import {Quiz} from "./../Types/quizTypes"
const shuffleArray = (arr: any)=>{
    return [...arr].sort(()=> Math.random() - 0.5)
}

export const fetchData = async (totalQuestions:number, difficulty: string) :Promise<Quiz[]>=>{
    const res =await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${difficulty}&type=multiple`);
    let {results} = await res.json()
    const quiz =results.map((questionObj: Quiz)=>{
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
    
} 