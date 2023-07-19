import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[0, 50, 90]}
        intensity={0.4}
        shadow-bias={-0.0001}
        shadow-mapSize={[4056, 4056]}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        castShadow
      />
      <directionalLight position={[0, 50, 150]} intensity={1} />
    </>
  );
};

export default Lights;
