const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.resolve(__dirname, "movies.txt"), "test content");