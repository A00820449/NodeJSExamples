const bands = require("./bands.js");

for (const genre in bands) {
    console.log(`A ${genre} band is ${bands[genre]}`);
}