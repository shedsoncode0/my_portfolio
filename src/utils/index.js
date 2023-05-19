/** @format */

import state from "../store";

const setCameraToCityView = (snap) => {
  state.cameraPosition.z = snap.cityCamera.position.z;
  state.cameraPosition.x = snap.cityCamera.position.x;
  state.cameraPosition.y = snap.cityCamera.position.y;
};

const setModelAndCameraToMobileViwe = (snap) => {
  if (window.innerWidth < 500) {
    state.cameraPosition.y = 1;
    state.cameraPosition.z = 4;
  }
};
const setModelAndCameraToNormalView = (snap) => {
  if (window.innerWidth > 500) {
    state.cameraPosition.y = 0;
    state.cameraPosition.z = 4;
  }
};

const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};
export {
  Controls,
  setCameraToCityView,
  setModelAndCameraToMobileViwe,
  setModelAndCameraToNormalView,
};
