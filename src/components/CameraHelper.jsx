import React from 'react';
import { PerspectiveCamera } from 'three';
import { useSnapshot } from 'valtio';
import state from '../store';

const CameraHelper = ({ cameraP }) => {
  const snap = useSnapshot(state);

  const camera = new PerspectiveCamera(
    60,
    snap.cameraHelper.x + 1,
    snap.cameraHelper.y + 1,
    snap.cameraHelper.z + 1
  );

  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
};

export default CameraHelper;
