
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

export default Course;
