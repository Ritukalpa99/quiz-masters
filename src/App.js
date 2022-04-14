import React from "react";
import { useGlobalContext } from "./Context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const {waiting,loading, questions, index, correct} = useGlobalContext()
  if(waiting) {
    return <SetupForm/>
  }
  if(loading) {
    return <Loading/>
  }
  
  const {question, incorrect_answers, correct_answers} = questions[0]
  const answers = [...incorrect_answers,correct_answers]
  return <main>
    <Modal/>
  </main>
}

export default App