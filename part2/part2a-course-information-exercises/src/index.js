import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Total = ({ courseParts }) => {
  const sum = courseParts.reduce((sum, part) => sum + part.exercises, 0)
  
  return(
    <p style={{fontWeight: 'bold'}}>total of {sum} exercises</p>
  ) 
}

const Content = ({ courseParts }) => {
  return (
    <div>
      {
        courseParts.map((part) => {
          return (
            <Part key={part.id} part={part} />
          )
        })
      }
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />

}


ReactDOM.render(<App />, document.getElementById('root'))


