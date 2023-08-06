import { useState } from 'react'
import { DateTime } from 'luxon'

function App() {
  const [currentTime, setCurrentTime] = useState('0')
  const [daySchedule, setDaySchedule] = useState({})
  const [showSchedule, setShowSchedule] = useState(false)

  const setTime = () => {
    const dt = DateTime.now()
    setCurrentTime(dt)

    const wakeUp = dt.plus({ hours: 12 })
    const firstNapDown = wakeUp.plus({ hours: 1, minutes: 30 })
    const firstNapUp = firstNapDown.plus({ hours: 1, minutes: 15 })
    const firstFeed = firstNapUp.plus({ minutes: 5 })
    const secondNapDown = firstFeed.plus({ hours: 1, minutes: 30 })
    const secondNapUp = secondNapDown.plus({ hours: 1, minutes: 20 })
    const secondFeed = secondNapUp.plus({ minutes: 5 })
    const thirdNapDown = secondFeed.plus({ hours: 1, minutes: 35 })
    const thirdNapUp = thirdNapDown.plus({ hours: 1, minutes: 10 })
    const thirdFeed = thirdNapUp.plus({ minutes: 10 })
    const fourthNapDown = thirdFeed.plus({ hours: 1, minutes: 40 })
    const fourthNapUp = fourthNapDown.plus({ minutes: 30 })
    const fourthFeed = fourthNapUp.plus({ hours: 1, minutes: 10 })
    const finalSleep = fourthFeed.plus({ minutes: 45 })

    setDaySchedule({
      wakeUp: wakeUp.toLocaleString(DateTime.TIME_SIMPLE),
      firstNapDown: firstNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      firstNapUp: firstNapUp.toLocaleString(DateTime.TIME_SIMPLE),
      firstFeed: firstFeed.toLocaleString(DateTime.TIME_SIMPLE),
      secondNapDown: secondNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      secondNapUp: secondNapUp.toLocaleString(DateTime.TIME_SIMPLE),
      secondFeed: secondFeed.toLocaleString(DateTime.TIME_SIMPLE),
      thirdNapDown: thirdNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      thirdNapUp: thirdNapUp.toLocaleString(DateTime.TIME_SIMPLE),
      thirdFeed: thirdFeed.toLocaleString(DateTime.TIME_SIMPLE),
      fourthNapDown: fourthNapDown.toLocaleString(DateTime.TIME_SIMPLE),
      fourthNapUp: fourthNapUp.toLocaleString(DateTime.TIME_SIMPLE),
      fourthFeed: fourthFeed.toLocaleString(DateTime.TIME_SIMPLE),
      finalSleep: finalSleep.toLocaleString(DateTime.TIME_SIMPLE),
    })
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
      <p>{currentTime === '0' ? 'Press the button to get the time' : 'Time is: ' + currentTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>

      {currentTime === '0' ? (
        <p>Get Sleep Time First</p>
      ) : (
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="border-2 border-red-900 px-5 py-2 rounded-xl bg-gradient-to-br from-purple-500 to-red-900"
          type="button"
        >
          Show Sleep Schedule
        </button>
      )}
      {showSchedule && (
        <div className="mt-5">
          <h2 className="text-2xl font-bold underline">{currentTime.plus({ hours: 12 }).toLocaleString(DateTime.DATE_FULL)} Schedule</h2>
          <p className="text-xl font-bold">Wake Up: {daySchedule.wakeUp}</p>
          <p className="text-xl font-bold">First Nap Down: {daySchedule.firstNapDown}</p>
          <p className="text-xl font-bold">First Nap Up: {daySchedule.firstNapUp}</p>
          <p className="text-xl font-bold">First Feed: {daySchedule.firstFeed}</p>
          <p className="text-xl font-bold">Second Nap Down: {daySchedule.secondNapDown}</p>
          <p className="text-xl font-bold">Second Nap Up: {daySchedule.secondNapUp}</p>
          <p className="text-xl font-bold">Second Feed: {daySchedule.secondFeed}</p>
          <p className="text-xl font-bold">Third Nap Down: {daySchedule.thirdNapDown}</p>
          <p className="text-xl font-bold">Third Nap Up: {daySchedule.thirdNapUp}</p>
          <p className="text-xl font-bold">Third Feed: {daySchedule.thirdFeed}</p>
          <p className="text-xl font-bold">Fourth Nap Down: {daySchedule.fourthNapDown}</p>
          <p className="text-xl font-bold">Fourth Nap Up: {daySchedule.fourthNapUp}</p>
          <p className="text-xl font-bold">Fourth Feed: {daySchedule.fourthFeed}</p>
          <p className="text-xl font-bold">Final Sleep: {daySchedule.finalSleep}</p>
        </div>
      )}
    </>
  )
}

export default App
