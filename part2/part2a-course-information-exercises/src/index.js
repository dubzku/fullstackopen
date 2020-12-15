import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

// const Total = ({ course }) => {
//   const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
//   return(
//     <p>Number of exercises {sum}</p>
//   ) 
// }

const Content = ({ courseParts }) => {
  return (
    <ul>
      {
        courseParts.map((part) => {
          return (
            <Part key={part.id} part={part} />
          )
        })
      }
    </ul>
  )
}

const Part = ({part}) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />

}


ReactDOM.render(<App />, document.getElementById('root'))


