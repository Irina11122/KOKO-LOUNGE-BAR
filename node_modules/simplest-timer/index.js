module.exports = function simplestTimer (handle, isInterval) {
  return {
    timeout: timeout,
    stop: stop,
    interval: interval
  }

  function timeout (callbackFn, duration, isInterval) {
    handle = isInterval ? setInterval(callbackFn, duration) : setTimeout(callbackFn, duration)
    return simplestTimer(handle, isInterval)
  }
  function stop () {
    isInterval ? clearInterval(handle) : clearTimeout(handle)
  }
  function interval (callbackFn, duration) {
    return timeout(callbackFn, duration, true)
  }
}
