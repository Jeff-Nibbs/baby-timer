import { useState } from 'react'
import { DateTime } from 'luxon'

function App() {
  const [currentTime, setCurrentTime] = useState('0')

  const setTime = () => {
    const dt = DateTime.now()
    setCurrentTime(dt)
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Press If Baby Began Night Sleep Cycle</h1>
      <button
        className="border-2 border-blue-900 px-5 py-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-900"
        type="button"
        onClick={() => setTime()}
      >
        Get Time
      </button>
      <p>{currentTime === '0' ? 'Press the button to get the time' : 'Time is: ' + currentTime}</p>

      {currentTime === '0' ? (
        <p>Get Sleep Time First</p>
      ) : (
        <button className="border-2 border-red-900 px-5 py-2 rounded-xl bg-gradient-to-br from-purple-500 to-red-900" type="button">
          Show Sleep Schedule
        </button>
      )}
    </>
  )
}

export default App
