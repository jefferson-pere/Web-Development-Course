import { AddButton } from "./components/AddButton";
import { CountCard } from "./components/CountCard";
import { ValueProvider } from "./contexts/ValueContext";

export function App() {
  return (
    <ValueProvider>
      <h1>Class 04 Contexts</h1>

      <AddButton/>

      <CountCard />
    </ValueProvider>
  );
}
