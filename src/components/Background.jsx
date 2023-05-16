import { Environment, Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';
import * as THREE from 'three';
import React from 'react';
import { angleToRadians } from '../utils/angle';

const Background = () => {
  return (
    <>
      <Environment preset='sunset' />

      <Sphere
        scale={[100, 100, 100]}
        rotation={[angleToRadians(25), angleToRadians(0), angleToRadians(0)]}
      >
        <LayerMaterial
          lighting='physical'
          transmission={0}
          clearcoat={0}
          roughness={100}
          side={THREE.BackSide}
        >
          <Gradient
            colorB={'#ebb2b1'}
            colorA={'#82addb'}
            axes='y'
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
        <meshNormalMaterial />
      </Sphere>
    </>
  );
};

export default Background;
