// https://beta.reactjs.org/apis/usecontext
import { createContext } from "react";

type Theme = "light" | "dark";

export const ThemeContext = createContext<Theme>("light");
ThemeContext.displayName = "ThemeContext";
