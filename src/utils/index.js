import state from '../store';

const setCameraToCityView = (snap) => {
  state.cameraPosition.z = snap.cityCamera.position.z;
  state.cameraPosition.x = snap.cityCamera.position.x;
  state.cameraPosition.y = snap.cityCamera.position.y;
};

export { setCameraToCityView };
