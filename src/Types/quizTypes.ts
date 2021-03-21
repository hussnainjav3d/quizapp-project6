
import React from 'react'
export type Quiz = {
    question: string
    answer: string
    correct_answer: string
    incorrect_answers: string[]
    options: string[]
    
}

export type questionProps = {
    options: string[]
    question: string
    handleSubmit: (e:React.FormEvent<EventTarget>) => void
}