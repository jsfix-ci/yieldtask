import { call } from 'redux-saga/effects'

export default (task, ...args) => call(
  _ => new Promise((resolve, reject) => {
    task(...args)
    .fork(err => reject(err), data => resolve(data))
  })
)
