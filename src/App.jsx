import DrinkList from "./components/conditional-rendering/drink-list";
import LightSwitch from "./components/interactivity/light-switch";
import ColorSwitchApp from "./components/interactivity/color-switch-app";

function App() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <DrinkList />

      <hr />

      <h1>Adding interactivity</h1>
      <h3>Light Switch exercise</h3>
      <LightSwitch />

      <h3>Color Switch exercise</h3>
      <ColorSwitchApp />
    </div>
  );
}

export default App;
