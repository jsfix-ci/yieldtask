/* eslint-disable */
const runTask = require('../src/index');
const Task = require('data.task')

const testTask = a => Task.of(10)
  .map(x => x + 10)

test('see for composition of two functions', () => {
  const a = 20 // yield runTask(testTask, 10)
  expect(a).toBe(20)
});
