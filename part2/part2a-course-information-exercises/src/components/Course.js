import React from 'react';

const Course = ({courses}) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        {
          courses.map((course) => {
            return (
              <div key={course.id}>
                <Header courseName={course.name} />
                <Content courseParts={course.parts} />
                <Total courseParts={course.parts} />
              </div>
            )
          })
        }
      </div>
    )
}
  
const Header = ({ courseName }) => <h2>{courseName}</h2> 

const Content = ({ courseParts }) => 
    <div>
        {
            courseParts.map(part => <Part key={part.id} part={part} />)
        }
    </div>
  
const Part = ({part}) => <p>{part.name} {part.exercises}</p>    

const Total = ({ courseParts }) => {
    const sum = courseParts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <p style={{fontWeight: 'bold'}}>total of {sum} exercises</p>
    ) 
}

export default Course