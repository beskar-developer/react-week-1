import { ThemeModeContext } from "@shared-vendor/contexts";

const ERROR_MESSAGE = "Provider is not used or the useThemeMode is called outside of provider!";

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) throw new Error(ERROR_MESSAGE);

  return context;
};
