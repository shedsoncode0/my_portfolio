import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react'

const CameraOrbitControl = () => {
    const { camera, gl} = useThree();

    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
       return () => {
        controls.dispose()
       }
    }, [gl, camera]);
    
  return null
}

export default CameraOrbitControl