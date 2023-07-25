/** @format */

import { proxy } from "valtio";

const state = proxy({
  intro: true,
  showPopup: {
    show: false,
    name: "",
  },
  introAnimationDone: false,
  darkMode: false,
  orbitFrontView: 0,
  orbitBackView: 210,
  diveIn: false,
  diveOut: false,
  button: "none",
  cameraZoomLevel: 1,
  startBoomboxAnimation: false,
  canvasColor: "white",
  deviceSize: {
    mobile_phone: 500,
    tablet_phone: 800,
  },
  planeLandPosition: {
    x: 0,
    y: -0.55,
    z: 7,
  },
  camera: {
    position: {
      x: 0,
      y: 0,
      z: 9, // d
    },
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

  city: {
    position: {
      x: 13,
      y: -5, //default 4
      z: -40,
    },
  },

  // Cars Section
  character: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    speed: 0.0005,
  },
});

export default state;
