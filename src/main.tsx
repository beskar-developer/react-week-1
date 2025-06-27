import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import ToDoListProvider from "@/providers/ToDoList/index.tsx";

import { VersionLogger } from "@shared-vendor/helpers/index.js";

VersionLogger.log();

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Compose components={[ThemeModeProvider, ToDoListProvider]}>
      <App />
    </Compose>
  </StrictMode>,
);
