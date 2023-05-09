import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.percent}</td>
    </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticLine value={good} text='good' />
        <StatisticLine value={neutral} text='neutral' />
        <StatisticLine value={bad} text='bad' />
        <StatisticLine value={total} text='total' />
        <StatisticLine value={average} text='average' />
        <StatisticLine value={positive} text='positive' percent='%' />
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const average = (good - bad) / total || 0;
  const positive = (good / total * 100) || 0;

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
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
