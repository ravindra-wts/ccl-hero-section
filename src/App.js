import React, { useRef, useMemo, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  Environment,
  OrbitControls,
  Plane,
  useGLTF,
  useAnimations
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import "./styles.css";

export default function App() {
  return (
    <>
      {/* <video src="/bg15.mp4" autoPlay loop /> */}
      <video src="/bg5.mp4" autoPlay loop />
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <ambientLight intensity={0.2} />
        {/* <Environment
          // files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@annotations/public/img/workshop_1k.hdr"
          // background
          preset={"forest"}
          intensity={0}
        /> */}
        {/* <ambientLight intensity={0.8} /> */}
        <OrbitControls
          autoRotate
          minPolarAngle={Math.PI / 9}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}

          // maxDistance={10}
        />
        <Model subPartName="center_logo" userDataKey="prop" path="/ccl.glb" />
      </Canvas>
    </>
  );
}

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/ccl.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="orbit_4"
          castShadow
          receiveShadow
          geometry={nodes.orbit_4.geometry}
          material={materials["white.003"]}
          rotation={[Math.PI, -0.58, Math.PI]}
          scale={[490.04, 0.05, 490.04]}
        />
        <mesh
          name="orbit_2"
          castShadow
          receiveShadow
          geometry={nodes.orbit_2.geometry}
          material={materials["white.001"]}
          rotation={[Math.PI, -0.35, Math.PI]}
          scale={[318.16, 0.05, 318.16]}
        />
        <mesh
          name="orbit_1"
          castShadow
          receiveShadow
          geometry={nodes.orbit_1.geometry}
          material={materials.white}
          rotation={[-Math.PI, 1.21, -Math.PI]}
          scale={[230.84, 0.05, 230.84]}
        />
        <mesh
          name="orbit_3"
          castShadow
          receiveShadow
          geometry={nodes.orbit_3.geometry}
          material={materials["white.002"]}
          rotation={[Math.PI, -0.93, Math.PI]}
          scale={[401.27, 0.05, 401.27]}
        />
        <mesh
          name="orbit_5"
          castShadow
          receiveShadow
          geometry={nodes.orbit_5.geometry}
          material={materials["white.004"]}
          rotation={[0, 0.21, 0]}
          scale={[576.38, 0.05, 576.38]}
        />
        <mesh
          name="orbit_6"
          castShadow
          receiveShadow
          geometry={nodes.orbit_6.geometry}
          material={materials["white.005"]}
          rotation={[-Math.PI, 0.18, -Math.PI]}
          scale={[665, 0.05, 665]}
        />

        <Billboard position={[0.34, 0, -2.19]} args={[1000, 1100]}>
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["Material.011"]}
            // position={[0.34, 0, -2.19]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[-2.6, 0, 1.06]} args={[1000, 1100]}>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials["Material.004"]}
            // position={[-2.6, 0, 1.06]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[-2.49, 0, -2.33]} args={[1000, 1100]}>
          <mesh
            name="Circle009"
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["Material.009"]}
            // position={[-2.49, 0, -2.33]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[1.6, 0, 0.21]} args={[1000, 1100]}>
          <mesh
            name="Circle011"
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials["Material.002"]}
            // position={[1.6, 0, 0.21]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[0.86, 0, -4.56]} args={[1000, 1100]}>
          <mesh
            name="Circle012"
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials["Material.010"]}
            // position={[0.86, 0, -4.56]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[5.08, 0, -1.6]} args={[1000, 1100]}>
          <mesh
            name="Circle013"
            castShadow
            receiveShadow
            geometry={nodes.Circle013.geometry}
            material={materials["Material.008"]}
            // position={[5.08, 0, -1.6]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <Billboard position={[0.41, 0, 4.01]} args={[1000, 1100]}>
          <mesh
            name="Circle014"
            castShadow
            receiveShadow
            geometry={nodes.Circle014.geometry}
            material={materials["Material.003"]}
            // position={[0.41, 0, 4.01]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.57}
          />
        </Billboard>

        <mesh
          name="orbit_7"
          castShadow
          receiveShadow
          geometry={nodes.orbit_7.geometry}
          material={materials["white.006"]}
          rotation={[-Math.PI, 0.26, -Math.PI]}
          scale={[763.17, 0.05, 763.17]}
        />

        <Billboard position={[0, 0, 0]} args={[1000, 1100]}>
          <mesh
            name="Frame_1"
            castShadow
            receiveShadow
            geometry={nodes.Frame_1.geometry}
            material={materials["Frame 1"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.78}
          />
        </Billboard>
      </group>
    </group>
  );
}

useGLTF.preload("/ccl.glb");

{
  /* <Billboard position={[0, 0, 0]} args={[1000, 1100]}>
<mesh
  name="cc_logo"
  castShadow
  receiveShadow
  geometry={nodes.cc_logo.geometry}
  material={materials.cc_gradient_01}
  rotation={[Math.PI / 2, 0, 0]}
  scale={2.69}
/>
</Billboard> */
}
