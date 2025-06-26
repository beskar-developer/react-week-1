type Context = {
  mode: string;
  isDark: boolean;
  isLight: boolean;
  toggleMode: () => void;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_CONTEXT: Context = {
  mode: "DARK",
  isDark: true,
  isLight: false,
  toggleMode: () => {},
  setMode: () => {},
};

const ThemeModeContext = createContext<Context>(DEFAULT_CONTEXT);

export default ThemeModeContext;
