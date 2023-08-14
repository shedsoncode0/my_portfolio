import {
  Cloud,
  Environment,
  PositionalAudio,
  SoftShadows,
  Stars,
  useEnvironment,
} from "@react-three/drei";
import React from "react";
import Lights from "./Lights";

const Effects = () => {
  const envMap = useEnvironment({ files: "/industrial_sunset_puresky_4k.hdr" });
  return (
    <>
      <Cloud segments={10} position={[-2, 11, 2]} speed={0.2} opacity={0.7} />
      <Cloud segments={10} position={[4, 9, -15]} speed={0.2} opacity={0.5} />
      <Cloud segments={10} position={[-4, 8, -10]} speed={0.2} opacity={1} />
      {/* <Cloud segments={10} position={[4, 9, 0]} speed={0.2} opacity={0.5} /> */}
      <Cloud segments={10} position={[4, 14, 0]} speed={0.2} opacity={0.7} />
      {/* <PositionalAudio
        url="/audios/sneaker-shoe-on-concrete-floor-fast-pace-1-www.FesliyanStudios.com.mp3"
        distance={1}
        autoplay
        loop
        // All THREE.PositionalAudio props are valid
      /> */}
      <Lights />
      <Stars radius={500} depth={50} count={1000} factor={10} />
      <SoftShadows size={130} samples={20} focus={0} />
      <axesHelper />
      {/* <Environment map={envMap} blur={0} /> */}
    </>
  );
};

export default Effects;
