import { proxy } from "valtio";

const state = proxy({
    intro: true,
    darkMode: false,
    orbitFrontView: 40,
    orbitBackView: 240,
    diveIn: false,
    cameraZoomLevel: 1,
    cameraPosition: {
        x: 0,
        y: 0,
        z: 0
    }
});

export default state;