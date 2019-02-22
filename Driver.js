var Block = require("./Block");
var Blockchain = require("./Blockchain");

let testChain = new Blockchain();

for (let i = 0; i < 100; i++) {
  console.log("Mining block...");
  testChain.addBlock(new Block(i, Date.now(), `This is block ${i}`));
}

console.log(JSON.stringify(testChain, null, 2));
console.log("Is blockchain valid?" + testChain.checkValid().toString());
