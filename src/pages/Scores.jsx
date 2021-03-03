import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
const Scores = ({ allPlayers }) => {
  const history = useHistory()
  const handleGoRoot = () => {
    history.push('/')
  }
  return (
    <section>
      <h1>Puntajes</h1>
      <div>
        {
          allPlayers.map(player => (
            <p key={allPlayers.indexOf(player)}>{`${player.name} - ${player.age} - ${player.email} - ${player.category} - ${player.points}`}</p>
          ))
        }
      </div>
      <button onClick={handleGoRoot}>Contestar otra trivia</button>
    </section>
    
  )
}

const mapStateToProps = state => {
  return {
    allPlayers: state.allPlayers
  }
}

export default connect(mapStateToProps, null)(Scores)