import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Physics, Debug } from "@react-three/rapier";
import Level from "./components/level.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics>
        <Debug />
        <Lights />
        <Level />
      </Physics>
    </>
  );
}
