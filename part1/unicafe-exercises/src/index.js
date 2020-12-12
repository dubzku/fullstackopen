import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = () => <h1>Give Feedback</h1>

const Button = ( {handleClick, text} ) => <button onClick={handleClick}>{text}</button>

const Statistics = ({goodStats, neutralStats, badStats}) => {
  const total = goodStats + neutralStats + badStats

  if (goodStats > 0 || neutralStats > 0 || badStats > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>good: {goodStats}</p>
        <p>neutral: {neutralStats}</p>
        <p>bad: {badStats}</p>
        <p>all: {total}</p>
        <p>average: {(goodStats-badStats)/total} </p>
        <p>positive: {goodStats/total * 100} % </p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics will appear here!</h2>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title />
      <Button handleClick={ () => setGood(good + 1) } text="good" />
      <Button handleClick={ () => setNeutral(neutral + 1) } text="neutral" />
      <Button handleClick={ () => setBad(bad + 1) } text="bad" />
      <Statistics goodStats={good} neutralStats={neutral} badStats={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

