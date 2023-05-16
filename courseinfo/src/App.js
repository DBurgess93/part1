
const Header = ({ course }) => {
  return (
    <h1>
      {course.name}
    </h1>
  )
}

const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part, i) => (
        <Part key={i} parts={part} />
      ))}
    </>
  )
}

const Total = ({ total }) => {
  return (
    <p> Total exercises {total} </p>
  )
}

const Course = ({ course, total }) => (
  <div>
    <Header course={course} />
    <Content course={course} total={total} />
    <Total total={total} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundementals of React',
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

  const total = course.parts.reduce((sum, parts) => sum + parts.exercises, 0)

  return <Course course={course} total={total} />
}

export default App;
