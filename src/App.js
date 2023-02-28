import React from "react"
import { Canvas } from "@react-three/fiber"
import { DrawPoints } from "./DrawPoints"
import { Loader, Stage,   } from "@react-three/drei"
import { Porsche } from "./Porsche"

function App() {
  return (
    <div className='App'>
      <div
        style={{
          height: "80vh",
          width: "80%",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#929292a9",
          position: "relative",
        }}>
        <Canvas
          dpr={window.devicePixelRatio}
          shadows='basic'
          camera={{
            position: [10, 10, 25],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}>
          <pointLight intensity={0.9} position={[10, 5, 10]} />
          <pointLight intensity={0.9} position={[-10, 3, 5]} />
          <pointLight intensity={0.9} position={[-3, 10, 5]} />

          <React.Suspense fallback={null}>
            <Stage>
              <Porsche />
            </Stage>
          </React.Suspense>
          <DrawPoints />
        </Canvas>
        <Loader />
      </div>
    </div>
  )
}

export default App
