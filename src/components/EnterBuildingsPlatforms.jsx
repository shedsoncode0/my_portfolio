import { Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { Platform } from "./models";
import { angleToRadians } from "../utils/angle";

const EnterBuildingsPlatforms = () => {
  return (
    <>
      <RigidBody
        name="projectPlatform"
        type="fixed"
        canSleep={false}
        position={[0.1, -0.54, 0.5]}
      >
        <Text
          rotation={[angleToRadians(-90), 0, 0]}
          position={[0, 0.01, 0]}
          scale={0.06}
        >
          ENTER
        </Text>
      </RigidBody>
      <RigidBody type="fixed" canSleep={false} position={[0.1, -0.54, 0.5]}>
        <Platform scale={0.1} />
      </RigidBody>

      {/* Media */}
      <group position={[-3.2, -0.005, -2.7]}>
        <RigidBody
          position={[0.1, -0.54, 0.5]}
          name="mediasPlatform"
          type="fixed"
          canSleep={false}
        >
          <Text
            rotation={[angleToRadians(-90), 0, 0]}
            position={[0, 0.01, 0]}
            scale={0.04}
          >
            ENTER
          </Text>
        </RigidBody>
        <RigidBody position={[0.1, -0.54, 0.5]} type="fixed" canSleep={false}>
          <Platform scale={0.06} />
        </RigidBody>
      </group>

      {/* Contact */}
      <group position={[-3.5, -0.005, 0.6]} rotation={[0,angleToRadians(90),0]}>
        <RigidBody
          position={[0.1, -0.54, 0.5]}
          name="contactPlatform"
          type="fixed"
          canSleep={false}
        >
          <Text
            rotation={[angleToRadians(-90), 0, 0]}
            position={[0, 0.01, 0]}
            scale={0.04}
          >
            ENTER
          </Text>
        </RigidBody>
        <RigidBody position={[0.1, -0.54, 0.5]} type="fixed" canSleep={false}>
          <Platform scale={0.06} />
        </RigidBody>
      </group>

      {/* Contact */}
      <group position={[1.9, -0.005, 4.9]} rotation={[0,angleToRadians(-90),0]}>
        <RigidBody
          position={[0.1, -0.54, 0.5]}
          name="mediasPlatform"
          type="fixed"
          canSleep={false}
        >
          <Text
            rotation={[angleToRadians(-90), 0, 0]}
            position={[0, 0.01, 0]}
            scale={0.04}
          >
            ENTER
          </Text>
        </RigidBody>
        <RigidBody position={[0.1, -0.54, 0.5]} type="fixed" canSleep={false}>
          <Platform scale={0.06} />
        </RigidBody>
      </group>
    </>
  );
};

export default EnterBuildingsPlatforms;
