const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, {props.message} </p>
    </div>
  )
}

const App = () => {
  const name = 'Daniel'
  const message = 'have fun learning React!'

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} message={message} />
    </div>
  )
}

export default App
