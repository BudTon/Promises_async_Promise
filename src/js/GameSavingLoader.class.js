import read from "./reader";
import json from "./parser";

// const { read } = require("./reader");
// const { json } = require("./parser");

export default class GameSavingLoader {
    // class GameSavingLoader {
    load() {
        return read().then(value => json(value))
    }
}

// module.exports = {
//     GameSavingLoader
// }