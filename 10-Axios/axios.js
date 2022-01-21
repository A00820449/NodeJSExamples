const axios = require("axios");

async function main() {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response);
}

main();