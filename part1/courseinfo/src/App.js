import React from 'react'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { Content } from './components/Content'

const App = () => {
  // // const course = 'Half Stack application development'
  // // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

export default App