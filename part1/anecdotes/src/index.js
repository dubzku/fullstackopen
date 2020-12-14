import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteOfTheDay = ({anecdoteOfTheDay, numberOfVotes}) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdoteOfTheDay}</p>
      <p>has {numberOfVotes} votes.</p>
    </div>
  )
}

const Button = ({handleButton, text}) => <button onClick={handleButton} style={{display: 'inline-block'}}>{text}</button>

const DisplayMostVotes = ({highestNumOfVotes, anecdoteWithMostVotes}) => {
  if (highestNumOfVotes > 0) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdoteWithMostVotes}</p>
        <p>has {highestNumOfVotes} votes.</p>
      </div>
    )
  }
  return <div><p>no votes have been placed yet</p></div>
}

const App = ({anecdotes}) => {
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

  let array = [];

  for (let anecdote in votes) {
    array.push(votes[anecdote])
  }

  const largestVotes = Math.max(...array)
  const indexOfLargestVotes = array.indexOf(Math.max(...array))

  
  const voteButton = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1
    }
    setVotes(newVotes)
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdoteOfTheDay={anecdotes[selected]} numberOfVotes={votes[selected]} />
      <Button handleButton={ voteButton } text="vote" />
      <Button handleButton={ () => setSelected(randomNum) } text="next anecdote" />
      <DisplayMostVotes highestNumOfVotes={largestVotes} anecdoteWithMostVotes={anecdotes[indexOfLargestVotes]} />
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

