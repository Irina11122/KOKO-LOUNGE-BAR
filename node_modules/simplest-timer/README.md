# simplest-timer

`simplest-timer` is a really simple timer utility. you can timeout, pause, stop and repeat a timer.

## installation

```shell
npm install --save simplest-timer
```

# usage

create an instance of simplestTimer:

```javascript
const simplestTimer = require('simplest-timer')
```

## `.timeout`

runs a function after a given duration.

```javascript
const callbackFn = () => console.log('hey!')
const duration = 100
simplestTimer.timeout(callbackFn, duration)
```

## `.stop`

stops a current timer.

```javascript
simplestTimer.timeout(callbackFn, duration)
simplestTimer.stop()
```

## `.interval`

runs a function repeatedly at a given interval.
```javascript
const callbackFn = () => console.log('hey!')
const duration = 100
simplestTimer.interval(callbackFn, duration)
```
