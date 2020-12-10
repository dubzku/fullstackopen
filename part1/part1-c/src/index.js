// import the useState function 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // function call usestate(0) adds state to the component - initializes it with the value of 0
  // function returns an array that contains two items
  // destructure the array and assign to variables 'counter' and 'setCounter'
  // counter variable is assigned the initial value of state (0)
  // 'setCounter' variable is assigned to a function that will be used to modify the state
  const [ counter, setCounter ] = useState(0)
  
  // // call the setTimeout function, and pass it two parameters; a function to increment the counter state and a timeout of 1 second 
  // // setCounter gets called 1 second after setTimeout gets called
  // // when setCounter gets called, React re-renders the component, which means the function body of the component function gets re-executed 
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // const handleClick = () => {
  //   console.log('clicked')
  // }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={ () => setCounter(counter + 1) }>
        plus
      </button>
      <button onClick={ () => setCounter(0)}>
        zero
      </button>
    </div>
  )
}


ReactDOM.render(
<App />, 
  document.getElementById('root')
)



