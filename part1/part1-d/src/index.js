import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ( {onClick, text} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // every click is stored in a separate piece of state called allClicks that is initialized as an empty array
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    // when left button is clicked, we add the letter L to the allClicks array
    // concat method does not mutate the existing array; returns a new copy of the array with the item added to it
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={ handleLeftClick } text="left" />
      <Button onClick={ handleRightClick } text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}


// setting state has to always be done by setting the state of a new object!
// if properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state

// const App = () => {
//   const [clicks, setClicks] = useState( {left: 0, right: 0} )

//   const handleLeftClick = () => 
//   setClicks( {...clicks, left: clicks.left + 1} )
  

//   const handleRightClick = () => 
//   setClicks( {...clicks,right: clicks.right + 1} )
  

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={ handleLeftClick }>left</button>
//       <button onClick={ handleRightClick }>right</button>
//       {clicks.right}
//     </div>
//   )
// }

ReactDOM.render(
  <App />, 
    document.getElementById('root')
)


