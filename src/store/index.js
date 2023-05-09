import { proxy } from "valtio";

const state = proxy({
    intro: true,
    darkMode: false,
    orbitFrontView: 40,
    orbitBackView: 240
});

export default state;