import React, { useState } from 'react'
import { connect } from 'react-redux'

const Home = ({ saludo }) => {
  const [ ready, setReady ] = useState(false)
  const [ completed, setCompleted ] = useState(false)
  const [ category, setCategory ] = useState('')

  const handleInfoCompleted = event => {
    event.preventDefault()
    setCompleted(true)
    console.log(saludo)
  }

  const handleSelectCategory = event => {
    setCategory(event.target.value)
  }

  const handleStart = event => {
    event.preventDefault()
    console.log(category);
    setReady(true)
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
              <input type="text" placeholder="Nombre..." required />
            </label>
            <label>
              <span>Edad: </span>
              <input type="number" placeholder="Edad..." required />
            </label>
            <label>
              <span>Email: </span>
              <input type="email" placeholder="Email..." required />
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
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, null)(Home)