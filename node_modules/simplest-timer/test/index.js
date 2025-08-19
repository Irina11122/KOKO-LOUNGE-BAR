const { ok } = require('assert')

const simplestTimer = require('..')

test('simplestTimer', () => {
  test('.timeout timer', done => {
    const timer = simplestTimer()
    timer.timeout(done, 0)
  })

  test('.stop timer', done => {
    const timer = simplestTimer()
    timer.timeout(() => {
      ok(false)
    }, 100)

    setTimeout(() => {
      timer.stop()
      done()
    }, 10)
  })

  test('.every ms', done => {
    const timer = simplestTimer()

    let calls = 0
    const increment = () => { calls++ }

    timer.interval(increment, 10)

    setTimeout(() => {
      timer.stop()
      ok(calls >= 5)
      done()
    }, 150)
  })
})
