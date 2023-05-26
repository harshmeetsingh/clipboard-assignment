const crypto = require("crypto");

function getHashedKey(dataStream) {
  return crypto.createHash("sha3-512").update(dataStream).digest("hex");
}

exports.myDeterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

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

  return candidate;
};
