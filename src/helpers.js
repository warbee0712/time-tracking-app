import uuid from 'uuid'

const newTimer = (attrs = {}) => {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuid.v4(), // eslint-disable-line no-undef
    elapsed: 0
  }

  return timer
}

// const findById = (array, id, cb) => {
//   array.forEach((el) => {
//     if (el.id === id) {
//       cb(el)
//       return
//     }
//   })
// }

const pad = (numberString, size) => {
  let padded = numberString
  while (padded.length < size) padded = `0${padded}`
  return padded
}

const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / 1000 / 60) % 60)
  const hours = Math.floor(ms / 1000 / 60 / 60)

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)
  ].join(':')

  return humanized
}

const renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed
  if (runningSince) {
    totalElapsed += Date.now() - runningSince
  }
  return millisecondsToHuman(totalElapsed)
}

export {
  millisecondsToHuman,
  newTimer,
  renderElapsedString
}
