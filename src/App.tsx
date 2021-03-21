import React, { useEffect,useState } from 'react';
import {fetchData} from './services/quizServices'
import './App.css';
import { Quiz } from './Types/quizTypes';
import QuestionCard from './components/QuestionCard';

function App() {
  const [data,setData]  = useState<Quiz[]>([])
  let [nextQuestion, setNextQuestion] = useState(0)
  const handleSubmit=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault()
    if(nextQuestion!==data.length-1)
    setNextQuestion(++nextQuestion)
  }
  useEffect(()=>{
    const getData = async()=>{
      const questions: Quiz[] = await fetchData(6, 'medium');
   setData(questions);
    }
    getData();  
  },[])

  
  if(!data.length){
    return <h3>Loading....</h3>
  }else
  return (
    <div className="App">
      <QuestionCard options={data[nextQuestion].options} question={data[nextQuestion].question} handleSubmit={handleSubmit} />
     {/* { data.map((item:Quiz,indx:number)=>
       <div key={indx}>
         <p dangerouslySetInnerHTML={{__html: item.question}}></p>
         <form >
           <label htmlFor="">
             <input type="radio" />
           </label>
         </form>
       </div>
     )} */}
    </div>
  );
}

export default App;
