// const { GameSaving } = require("./js/GameSaving.class");
// const { GameSavingLoader } = require("./js/GameSavingLoader.class");
import GameSaving from "./js/GameSaving.class";
import GameSavingLoader from "./js/GameSavingLoader.class";


const saveUserGame = new GameSavingLoader

saveUserGame.load().then((saving) => {
    try {
        // saving объект класса GameSaving
        const saveGame = JSON.parse(saving)
        const userGameSaving = new GameSaving(saveGame.id, Date(saveGame.created * 1000), saveGame.userInfo)
        console.log(userGameSaving);
    } catch (error) {
        console.error(error.name, 'Ooooops');
    } finally {
        console.warn('\n\nGame Over\n\n');
    }
});

// Вариант 2
// const save = new GameSavingLoader;
// const saving = save.load()
//     .then(value => JSON.parse(value))
//     .then(saveGame => new GameSaving(saveGame.id, Date(saveGame.created * 1000), saveGame.userInfo))
//     .then(saves => saves)
// console.log(saving);