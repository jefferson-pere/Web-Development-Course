import imageReact from "./assets/react.svg"; //import img
import { Button } from "./components/Button";

//named export
export function App() {
  return (
    <>
      <h1>Class-02-Components</h1>
      <p>.TSX = TypeScript + HTML</p>

      <img src={imageReact} alt="" />

      <img src="../public/vite.svg" alt="" />

      <div>
        <Button title="Login" color="red" />
        <Button title="Adquirir" color="blue" />
        <Button title="Sair" />
      </div>
    </>
  );
}
