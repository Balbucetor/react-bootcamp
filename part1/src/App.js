import Content from "./components/Content.jsx"
import Header from "./components/Header.jsx"
import Total from "./components/Total.jsx"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      < Header name= {course} />
      < Content part = {parts[0]}  />
      < Content part = {parts[1]}  />
      < Content part = {parts[2]}  />
       < Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
