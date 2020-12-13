import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleButton, text}) => <button onClick={handleButton} style={{display: 'block'}}>{text}</button>

const App = (props) => {
  const randomNum = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })
  
  const voteButton = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1
    }
    setVotes(newVotes)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes.</p>
      <Button handleButton={ voteButton } text="vote" />
      <Button handleButton={ () => setSelected(randomNum) } text="next anecdote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

