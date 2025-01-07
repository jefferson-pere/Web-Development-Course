import imageReact from "./assets/react.svg"; //import img

//named export
export function App() {
  return (
    <>
      <h1>Class-02-Components</h1>
      <p>.TSX = TypeScript + HTML</p>

      <img src={imageReact} alt="" />

      <img src="../public/vite.svg" alt="" />
    </>
  );
}
