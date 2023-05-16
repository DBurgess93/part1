
const Header = ({ course }) => {
  return (
    <h2>
      {course.name}
    </h2>
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
    <p> <b>Total of {total} exercises</b> </p>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total = (courseIndex) =>
    courses[courseIndex].parts.reduce((sum, parts) => sum + parts.exercises, 0)

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course, index) => (
        <Course key={index} course={course} total={total(index)} />
      ))}
    </div>
  )
}

export default App;
