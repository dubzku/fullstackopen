import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={ () => setLeft(left + 1) }>
//         left
//       </button>
//       <button onClick={ () => setRight(right + 1) }>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }


// setting state has to always be done by setting the state of a new object!
// if properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into an ew object, and setting that as the new state

const App = () => {
  const [clicks, setClicks] = useState( {left: 0, right: 0} )

  const handleLeftClick = () => 
  setClicks( {...clicks, left: clicks.left + 1} )
  

  const handleRightClick = () => 
  setClicks( {...clicks,right: clicks.right + 1} )
  

  return (
    <div>
      {clicks.left}
      <button onClick={ handleLeftClick }>left</button>
      <button onClick={ handleRightClick }>right</button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(
  <App />, 
    document.getElementById('root')
)


