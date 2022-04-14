import React from "react";
import { useGlobalContext } from "./Context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      <Modal/>
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/ {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((ans, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => checkAnswer(correct_answer === ans)}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: ans }}
                />
              );
            })}
          </div>
        </article>
        <button onClick={nextQuestion} className="next-question">
          next Question
        </button>
      </section>
    </main>
  );
}

export default App;
