import { proxy } from "valtio";

const state = proxy({
    intro: true,
    darkMode: false,
});

export default state;