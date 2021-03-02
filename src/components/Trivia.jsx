import React from 'react'
const Trivia = ({ questions }) => {
  return (
    <form>
      <h2>Contesta las siguientes prefuntas</h2>
      {
        questions.map(questionI => {
          return (
            <div>
              <h3>{questionI.question}</h3>
                {
                  questionI.options.map(optionI => (
                    <label>
                      <span>{optionI}</span>
                      <input type="radio" name={questionI.question} value={optionI}/>
                    </label>
                  ))
                }
            </div>
          )
        })
      }
      <button type="button" onClick={handleRespond}>Terminar trivia</button>
    </form>
  )
}

export default Trivia