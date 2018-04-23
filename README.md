# yieldTask

Make your data.task monads yieldable in generators.

### Example
```javascript
import runTask from 'runtask'
import Task from 'data.task'

const testTask = x =>
  Task.of(a)
    .map(x => x + 10)

function* test () {
  const a = yield yieldTask(testTask, 10)
  console.log(a) // 20
}

```