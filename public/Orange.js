/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

var lerp = require("lerp");

export default function Orange({ ...props }) {
  const ref = useRef();

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useFrame(
    (state) => (
      (ref.current.position.y = lerp(
        ref.current.position.y,
        -4 + scrollTop * 0.05,
        0.03
      )),
      (ref.current.rotation.x = lerp(
        0 + ref.current.position.y,
        5 + scrollTop * 0.05,
        0.03
      )),
      (ref.current.rotation.z = lerp(
        ref.current.position.y,
        -5 + scrollTop * 0.05,
        0.03
      )),
      (ref.current.rotation.y += 0.01)
      
    )
  );

  const group = useRef();
  const { nodes, materials } = useGLTF("/orange.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={ref} position={[0, 0, 0]} scale={[1, 0.79, 1]}>
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Sphere_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/orange.glb");
