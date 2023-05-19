/** @format */

import React from "react";
import { PerspectiveCamera } from "three";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraHelper = ({ cameraP }) => {
  const snap = useSnapshot(state);

  const camera = new PerspectiveCamera(
    50,
    snap.cameraPosition.x + 1,
    snap.cameraPosition.y + 1,
    snap.cameraPosition.z + 1
  );

  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
};

export default CameraHelper;
