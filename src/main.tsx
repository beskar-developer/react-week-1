import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import ToDoListProvider from "@/providers/ToDoList/index.tsx";

import { VersionLogger } from "@shared-vendor/helpers/index.js";

import "@shared-vendor/assets/style/index.css";

VersionLogger.log();

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Compose components={[ThemeModeProvider, ErrorBoundary, ToDoListProvider]}>
      <App />
    </Compose>
  </StrictMode>,
);
