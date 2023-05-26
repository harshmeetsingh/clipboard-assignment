const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Test to check for same values to return same result", () => {
    const keyStringInput1 = deterministicPartitionKey("abc");
    const keyStringInput2 = deterministicPartitionKey("abc");
    expect(keyStringInput1).toEqual(keyStringInput2);
  });
  it("Test to check value when partition key is provided", () => {
    const partitionKeyOutput = deterministicPartitionKey({
      partitionKey: "abc",
    });
    expect(partitionKeyOutput).toBe("abc");
  });
  it("Test to check value when partition key is provided and is a number", () => {
    const partitionKeyOutput = deterministicPartitionKey({
      partitionKey: 1,
    });
    expect(partitionKeyOutput).toBe("1");
  });
  it("Test to check value when partition key is provided and is an array(check for non primitive)", () => {
    const partitionKeyOutput = deterministicPartitionKey({
      partitionKey: [1, 2, 3],
    });
    expect(partitionKeyOutput).toEqual("[1,2,3]");
  });
  it("Test to check value when number is provided", () => {
    const partitionKeyOutput1 = deterministicPartitionKey(123);
    const partitionKeyOutput2 = deterministicPartitionKey(123);
    expect(partitionKeyOutput1).toEqual(partitionKeyOutput2);
  });
  it("Test to check value when different inputs are provided", () => {
    const partitionKeyOutput1 = deterministicPartitionKey(123);
    const partitionKeyOutput2 = deterministicPartitionKey(456);
    expect(partitionKeyOutput1).not.toEqual(partitionKeyOutput2);
  });
});
