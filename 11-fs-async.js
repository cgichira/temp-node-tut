const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done with this task!");
      }
    );
  });
});
console.log("start with the next task");
