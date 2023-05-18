

import data from '../../data.json'
import { useState } from 'react'




export const Question = () => {
    const [currentQue, setCurrentQue] = useState(0);
    const [question, setQuestion] = useState(data)
    const [showResult, setShowresult] = useState(false)
    const initialState = 0

   
    const Next =() =>{
        setCurrentQue(currentQue+1)
        if(currentQue === question.length-1 ){
            setShowresult(true);
        }
    }

    const Reset = () =>{
        setCurrentQue(initialState)
        setShowresult(false);
    }
 
   
    return (
        <div>
            {!showResult && (
                <div>
                    <h5> {currentQue + 1} {question[currentQue].Question} </h5>
                    <button onClick={()=>Next()}>Next</button>
                </div>
            )}

            {
               showResult && (
                <div>
                    <button onClick={() => Reset()}>Reset</button>
                </div>) 
            }

        </div>
    )
}