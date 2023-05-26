const { deterministicPartitionKey } = require("./dpk");
const { myDeterministicPartitionKey } = require("./mydpk");
console.log(myDeterministicPartitionKey());
console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey(1));
