import React from "react"
import { usePointStore } from "./usePointStore"
import { Sphere, Points, Line } from "@react-three/drei"

const DotPoint = ({ point }) => {
  return (
    <Sphere position={point}>
      <meshBasicMaterial color='magenta' />
      <sphereGeometry args={[0.0075, 32, 32]} />
    </Sphere>
  )
}

export const StrokePoints = ({ points }) => {
  return (
    <Line points={points.map((p) => p.point)} lineWidth={9} color='magenta' />
  )
}

const DotPoints = ({ points }) => {
  return (
    <Points>
      <pointsMaterial fog={false} sizeAttenuation vertexColors />
      {points.map((p) => (
        <DotPoint point={p.point} key={p.id} />
      ))}
    </Points>
  )
}

export const DrawPoints = () => {
  const points = usePointStore((state) => state.points)

  if (points.length < 1) return null

  return (
    <>
      <DotPoints points={points} />
      <Line points={points.map((p) => p.point)} lineWidth={9} color='magenta' />
    </>
  )
}
