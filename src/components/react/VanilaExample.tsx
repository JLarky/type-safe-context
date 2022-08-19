import { ThemeContext } from "./vanila";
import { useContext } from "react";

export function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <button className={className} onClick={() => alert(theme)}>
      Click me
    </button>
  );
}
