import { useState } from 'react'
import { DateTime } from 'luxon'

function App() {
  const [currentTime, setCurrentTime] = useState('0')
  const [daySchedule, setDaySchedule] = useState({})

  const setTime = () => {
    const dt = DateTime.now()
    const now = dt.toLocaleString(DateTime.TIME_SIMPLE)
    setCurrentTime(now)

    const wakeTime = dt.plus({ hours: 12 })
    const firstNapDown = wakeTime.plus({ hours: 1.5 })
    const firstNapUp = firstNapDown.plus({ hours: 1.5 })
    const secondNapDown = firstNapUp.plus({ hours: 1.5 })
    const secondNapUp = secondNapDown.plus({ hours: 1.5 })

    console.log(firstNapDown.toLocaleString(DateTime.TIME_SIMPLE))

    setDaySchedule({
      wakeTime: wakeTime.toLocaleString(DateTime.TIME_SIMPLE),
      firstNapDown: firstNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      firstNapUp: firstNapUp.toLocaleString(DateTime.TIME_SIMPLE),
      secondNapDown: secondNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      secondNapUp: secondNapUp.toLocaleString(DateTime.TIME_SIMPLE),
    })
  }
  console.log(daySchedule)

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
