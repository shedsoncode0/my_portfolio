/** @format */

import state from "../store";
import * as THREE from "three";

const standardMaterial = ({
  color,
  metalness = 0,
  roughness = 1,
  emissive = false,
  emissiveIntensity = 0,
}) => {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity,
  });
};

const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
  accelerate: "accelerate",
};

const changeEditProperty = (propertyName, state) => {
  state.car.property.name = propertyName;
  if (state.car.property.name === propertyName) {
  }
};

const moveObjectByImpulse = ({ object, x, y, z }) => {
  object.current.applyImpulse({ x, y, z });
};
export { Controls, standardMaterial, moveObjectByImpulse };
