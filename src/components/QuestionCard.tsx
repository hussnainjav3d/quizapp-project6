import React from 'react'
import { questionProps } from '../Types/quizTypes'

const QuestionCard:React.FC<questionProps> = ({options, question, handleSubmit}) => {
   
    return (
        <div>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
        <form onSubmit={handleSubmit}>
          {options.map((option:string, idx:number)=>
            <div key={idx} onChange={(option)=> {console.log(option)}}>
              
              <input type="radio" name="option" id={option} value={option}  />
              <label htmlFor={option} >{option}</label>
            
            </div>
          )}
          <input type="submit"/>
        </form>
        </div>
    )
}

export default QuestionCard
