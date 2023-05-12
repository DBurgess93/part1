import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayAnecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote} </p>
      <p> Total votes: {votes} </p>
    </div>)
}

const DisplayAnecdoteWithMostVotes = ({ anecdote, votes }) => {
  if (votes > 0) {
    return (
      <div>
        <p>{anecdote} </p>
        <p>{votes} votes </p>
      </div>
    )
  } else {
    return null
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleRandomClick = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInt)
  }

  const handleVoteClick = () => {
    const newVotes = {
      ...votes,
      [selected]: (votes[selected] || 0) + 1
    }
    setVotes(newVotes)
    console.log(newVotes)
  }

  const handleMostVotes = () => {
    const voteArray = Object.entries(votes)
      .map(([index, votes]) => ({ index, votes }))
    if (voteArray.length === 0) {
      alert('None of the anecdotes have votes yet')
      setMostVotes({ index: 0, votes: 0 })
      return
    }
    const maxAn = voteArray.reduce((max, an) => max.votes > an.votes ? max : an)
    setMostVotes(maxAn)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [mostVotes, setMostVotes] = useState({ index: 0, votes: 0 })
  const anecdote = anecdotes[selected]
  const totalVotes = votes[selected] || 0
  const anecdoteWithMostVotes = anecdotes[mostVotes.index]

  return (
    <div>
      <Button handleClick={handleRandomClick} text="next anecdote" />
      <Button handleClick={handleVoteClick} text="Vote" />
      <DisplayAnecdote
        anecdote={anecdote}
        votes={totalVotes}
      />
      <Button handleClick={handleMostVotes} text="Show anecdote with most votes" />
      <DisplayAnecdoteWithMostVotes
        anecdote={anecdoteWithMostVotes}
        votes={mostVotes.votes}
      />
    </div>
  );
}

export default App;
