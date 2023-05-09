import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p> total reviews {total} </p>
      <p>average {average} </p>
      <p> positive {positive} % </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const average = (good - bad) / total || 0;
  const positive = (good / total * 100)

  const handleGoodClick = () => {
    setTotal(total + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setTotal(total + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setTotal(total + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average.toFixed(12)}
        positive={positive}
      />
    </div>
  );
}

export default App;
