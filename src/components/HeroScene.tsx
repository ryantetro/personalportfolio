import React, { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';

const FloatingGeometry = lazy(() => import('./FloatingGeometry'));

const HeroScene: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <FloatingGeometry />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
