import { Environment, Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from 'lamina'
import * as THREE from 'three'
import React from 'react'

const Background = () => {
  return (
    <>
        <Environment preset='sunset' />
        
        <Sphere scale={[100,100,100]} rotateY={Math.PI / 2}> 
            <LayerMaterial
                lighting='physical'
                transmission={1}
                clearcoat={0}
                roughness={100}
                side={THREE.BackSide}
            >
                <Gradient colorA={"black"} colorB={"black"} axes='y' start={0} end={-0.5 } />
            </LayerMaterial> 
             <meshNormalMaterial />
        </Sphere>
    </>
  )
}

export default Background