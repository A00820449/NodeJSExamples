const fs = require("fs");
const path = require("path");

const text = process.argv[2] || "";

fs.appendFileSync(path.resolve(__dirname, "ejemplo.txt"), text);