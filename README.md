# runtask

Make your data.task monads yieldable in generators.

### Example
```javascript
import runTask from 'runtask

const testTask = x =>
  Task.of(a)
    .map(x => x + 10)

function* test () {
  const a = yield runTask(testTask, 10)
  console.log(a) // 20
}

```