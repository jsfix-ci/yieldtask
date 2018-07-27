# yieldTask

Make your data.task monads yieldable in redux sagas.

### Example

```javascript
import runTask from "yieldtask";
import Task from "data.task";

const testTask = x => Task.of(a).map(x => x + 10);

function* test() {
  const a = yield runTask(testTask, 10); // a => 20
}

function* mySaga() {
  yield takeLatest("EXAMPLE_ACTION", test);
}
```
