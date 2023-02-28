import React, { useState, startTransition } from "react"
import { useGesture } from "@use-gesture/react"
import { usePointStore } from "./usePointStore"

import { useGLTF, meshBounds, OrbitControls } from "@react-three/drei"

export function Porsche(props) {
  const { nodes, materials } = useGLTF("/porsche.glb")
  const [enabled, setEnabled] = useState(true)
  const addPoint = usePointStore((state) => state.addPoint)
  const dropPoint = usePointStore((state) => state.dropPoint)

  const disableControls = () => {
    setEnabled(false)
  }
  const enableControls = () => {
    setEnabled(true)
  }

  const bind = useGesture({
    /* When we begin a dragging/stroking gesture on the model, freeze the camera so the we can draw on a stationary model  */
    onDragStart: () => {
      disableControls()
    },
    onDrag: ({ event }) => {
      /* Render a trail of spheres (and a line) the tracks pointer coordinates */
      event.stopPropagation()

      const { point } = event

      addPoint(point)

      //? Hopefully there are some performance gains by deferring
      startTransition(() => {
        setTimeout(dropPoint, 800)
      })
    },
    onDragEnd: () => {
      // Enable camera controls, clear mesh
      enableControls()
    },
  })
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          raycast={meshBounds}
          {...bind()}
          dispose={null}
          visible={false}
          geometry={nodes.boot011_0003.geometry}
          material={nodes.boot011_0003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot001_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot002_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot003_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot004_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot005_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot006_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot007_0.geometry}
          material={materials.logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot008_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot009_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot010_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0001.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_1.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_2.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_1.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_2.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front009_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder000_2.geometry}
          material={materials.rubber}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder000_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder000_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder000_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.rubber}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_0.geometry}
          material={materials.license}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_0.geometry}
          material={materials.license}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.underbody_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear001_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.windshield_1.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.windshield_0.geometry}
          material={materials.window}
        />
      </group>
      <OrbitControls enabled={enabled} makeDefault />
    </>
  )
}

useGLTF.preload("/porsche.glb")
