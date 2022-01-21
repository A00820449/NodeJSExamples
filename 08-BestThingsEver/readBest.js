const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "best_things_ever.txt"),"utf-8").split(",");

for (const thing of data) {
    console.log(thing.trim());
}