import { CARD_SETS, SETUP, CLEANUP } from "./tests/data.js";

function getStubbedCardSets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(CARD_SETS);
        }, 1250);
    })
}

function getStubbedSetup(cardSets, players) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(SETUP)
        }, 2500, cardSets, players)
    })
}

function getStubbedCleanup(cardSets) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(CLEANUP)
        }, 3000, cardSets)
    })
}

export default {
    getCardSets: getStubbedCardSets,
    getSetup: getStubbedSetup,
    getCleanup: getStubbedCleanup
};