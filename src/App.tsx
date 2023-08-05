import { useState } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState('0')
  const date = new Date()

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  const setTime = () => {
    setCurrentTime(padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes()) + ':' + padTo2Digits(date.getSeconds()))
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button type="button" onClick={() => setTime()}>
        Get Time
      </button>
      <p>{currentTime.toLocaleString()}</p>
    </>
  )
}

export default App
