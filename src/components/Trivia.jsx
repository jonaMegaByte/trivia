import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPoints, setNewPlayer } from '../actions'

const Trivia = ({ questions, setPoints, actualPlayer, setNewPlayer }) => {
  const [ finishGame, setFinishGame ] = useState(false)
  const history = useHistory()
  let correctA = []

  useEffect(() => {
    if (actualPlayer.points) {
      setNewPlayer(actualPlayer)
    }
  }, [actualPlayer])

  const handleRespond = event => {
    event.preventDefault()
    const answered = [...event.target.elements]
    questions.map(questionI => {
      answered.map(input => {
        if(questionI.question === input.name) {
          if (input.checked && input.value === questionI.correct) {
            correctA.push(questionI.question)
          }
        }
      })
    })
    setPoints(correctA.length)
    setFinishGame(true)
  }
  
  const handleSeeScores = () => {
    history.push('/scores')
  }

  if (finishGame) {
    return (
      <div>
        <h2>{`Tuviste ${actualPlayer.points} respuestas correctas`}</h2>
        <button onClick={handleSeeScores}>Ver todos los puntajes puntajes</button>
      </div>
    )
  } else {
    return (
      <form onSubmit={handleRespond}>
        <h2>Contesta las siguientes prefuntas</h2>
        {
          questions.map(questionI => (
            <div key={questions.indexOf(questionI)}>
              <h3>{questionI.question}</h3>
                {
                  questionI.options.map(optionI => (
                    <label key={questionI.options.indexOf(optionI)}>
                      <span>{optionI}</span>
                      <input type="radio" name={questionI.question} value={optionI}/>
                    </label>
                  ))
                }
            </div>
          ))
        }
        <button type="submit">Terminar trivia</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    actualPlayer: state.actualPlayer
  }
}

const mapDispatchToProps = {
  setPoints,
  setNewPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(Trivia)