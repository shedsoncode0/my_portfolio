/** @format */

import { proxy } from "valtio";

const state = proxy({
  intro: true,
  darkMode: false,
  orbitFrontView: 0,
  orbitBackView: 210,
  diveIn: false,
  cameraZoomLevel: 1,
  startBoomboxAnimation: false,
  canvasColor: "pink",
  cameraPosition: {
    x: 0,
    y: 0,
    z: 10,
  },
  cameraHelper: {
    x: 0,
    y: 0,
    z: 0,
  },
  cityCamera: {
    position: {
      x: 0,
      y: 2,
      z: 52,
    },
  },
});

export default state;
