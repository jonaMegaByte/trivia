import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setActualPlayer, clearActualPlayer } from '../actions'
import Trivia from '../components/Trivia'
import footballQ from '../state/questions/football'
import techQ from '../state/questions/tech'
import videogamesQ from '../state/questions/videogames'

const Home = ({ setActualPlayer, actualPlayer, clearActualPlayer }) => {
  useEffect(()=>clearActualPlayer(),[])
  const [ ready, setReady ] = useState(false)
  const [ completed, setCompleted ] = useState(false)
  const [ category, setCategory ] = useState('')
  const [ playerInfo, setPlayerInfo ] = useState({})
  let questionsSelected = null
  

  const handleInfoCompleted = event => {
    event.preventDefault()
    setCompleted(true)
  }

  const handleSelectCategory = event => {
    setCategory(event.target.value)
  }

  const handleStart = event => {
    event.preventDefault()
    setActualPlayer({
      category,
      ...playerInfo
    })
    setReady(true)
  }

  const handleInputChange = event => {
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value
    })
  }

  if (actualPlayer.category === 'football') {
    questionsSelected = footballQ
  } else if (actualPlayer.category === 'tech') {
    questionsSelected = techQ
  } else {
    questionsSelected = videogamesQ
  }

  return (
    <div>
      <header>
        <h1>Bienvenido al juego de Trivia</h1>
      </header>
      {
        !ready && (
          <div>
          <h2>Por favor, ingresa tus datos</h2>
          <form onSubmit={handleInfoCompleted}>
            <label>
              <span>Nombre: </span>
              <input type="text" placeholder="Nombre..." name='name' required onChange={handleInputChange} />
            </label>
            <label>
              <span>Edad: </span>
              <input type="number" placeholder="Edad..." name='age' required onChange={handleInputChange} />
            </label>
            <label>
              <span>Email: </span>
              <input type="email" placeholder="Email..." name='email' required onChange={handleInputChange} />
            </label>
            <button>Escoger categoría</button>
          </form>
          {
            completed && (
              <form onSubmit={handleStart}>
                <h2>Escoge la categoría que deseas</h2>
                <label>
                  <span>Futbol</span>
                  <input type="radio" name="category" value="football" onClick={handleSelectCategory} />
                </label>
                <label>
                  <span>Videojuegos</span>
                  <input type="radio" name="category" value="videogames" onClick={handleSelectCategory} />
                </label>
                <label>
                  <span>Tecnología</span>
                  <input type="radio" name="category" value="tech"  onClick={handleSelectCategory} />
                </label>
                <button>Empezar la trivia</button>
              </form>
            )
          }
          </div>
        )
      }
      {
        ready && (
          <Trivia questions={questionsSelected} />
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    actualPlayer: state.actualPlayer
  }
}

const mapDispatchToProps = {
  setActualPlayer,
  clearActualPlayer
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)