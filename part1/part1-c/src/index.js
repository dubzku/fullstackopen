// import the useState function 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={ props.handleClick }>
      {props.text}
    </button>
  )
}

const App = () => {
  // function call usestate(0) adds state to the component - initializes it with the value of 0
  // function returns an array that contains two items
  // destructure the array and assign to variables 'counter' and 'setCounter'
  // counter variable is assigned the initial value of state (0)
  // 'setCounter' variable is assigned to a function that will be used to modify the state
  const [ counter, setCounter ] = useState(0)
  
  {/* when setCounter gets called, React re-renders the component, which means the function body of the component function gets re-executed  */}
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button text="plus" handleClick={ increaseByOne} />
      <Button text="zero" handleClick={ setToZero} />
      <Button text="minus" handleClick={ decreaseByOne } />
    </div>
  )
}


ReactDOM.render(
<App />, 
  document.getElementById('root')
)



