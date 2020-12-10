// import the useState function 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ( { counter } ) => <div>{counter}</div> 

const Button = ({ handleClick, text}) => <button onClick={ handleClick }>{text}</button>
  

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

// Explanation:
// When the application starts, the code in App is executed. This code uses a useState hook to create the application state, setting an initial value of the variable counter. This component contains the Display component - which displays the counter's value, 0 - and three Button components. The buttons all have event handlers, which are used to change the state of the counter.

// When one of the buttons is clicked, the event handler is executed. The event handler changes the state of the App component with the setCounter function. Calling a function which changes the state causes the component to rerender.

// So, if a user clicks the plus button, the button's event handler changes the value of counter to 1, and the App component is rerendered. This causes its subcomponents Display and Button to also be re-rendered. Display receives the new value of the counter, 1, as props. The Button components receive event handlers which can be used to change the state of the counter.



