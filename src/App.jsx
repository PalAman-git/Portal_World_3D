import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Text } from '@react-three/drei'
function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#181717"]} />
      
      <Text
        font="fonts/Poppins-Black.ttf"
        fontSize={0.3}
        position={[0, 2.4, 0.13]}
        anchorX={"center"}
        color={"#e1dae1"}
      >
        Double Click on the Cards   &   drag to see the magic
        <meshBasicMaterial color={'#444244'} toneMapped={false} />
      </Text>
      <Experience />
    </Canvas>
  );
}

export default App;
