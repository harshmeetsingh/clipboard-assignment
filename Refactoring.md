# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

As nested if else statements are always more verbose and are difficult to understand I made the code cleaner by using operators. Operators are much more cleaner and elegant way to add conditions, morover it also make the code concise and reduces number of lines. It also increases code readability as nestes if and else condition are usually hard to read

```javascript
candidate =
  event &&
  (event.partitionKey
    ? event.partitionKey
    : getHashedKey(JSON.stringify(event)));

candidate =
  candidate && typeof candidate !== string
    ? JSON.stringify(candidate)
    : TRIVIAL_PARTITION_KEY;

if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
  candidate = getHashedKey(candidate);
}
```

I also created helper function as the same functionality was getting used in multiple places. This also made the code more cleaner and removed some bulkiness out. If a task is performed multiple times, I feel its better to separate it in a function. This makes the code more predictable concise easy to read. Also it helps further refactoring as any change to that calculaytion will only require changes in one place

```javascript
function getHashedKey(dataStream) {
  return crypto.createHash("sha3-512").update(dataStream).digest("hex");
}
```
