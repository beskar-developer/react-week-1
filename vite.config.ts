import { defineConfig, loadEnv } from "vite";

import AutoImportPlugin from "unplugin-auto-import/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const ENV_DIRECTORY = "./env";
const JS_FILE_PATTERN = /\.[tj]sx?$/;

const AUTO_IMPORT_CONFIG = {
  include: [JS_FILE_PATTERN],
  imports: [
    "react",
    { from: "react", imports: ["ComponentProps", "ReactNode", "SyntheticEvent"], type: true },
    {
      "react-hook-form": ["Controller", "useForm"],
      react: ["StrictMode"],
    },
  ],
  dirs: [
    "./packages/shared-vendor/hooks/**",
    "./packages/shared-vendor/utils/**",
    "./packages/shared-vendor/components/**/*",
    "./src/hooks/**",
    "./src/components/**/*",
  ],
  dirsScanOptions: {
    filePatterns: [".ts", ".tsx", ".js", ".jsx"],
    fileFilter: (file: string) => !file.includes(".type"),
    types: false,
  },
  dts: true,
  eslintrc: {
    enabled: true,
  },
};

export default ({ mode = "dev" } = {}) => {
  process.env = { ...process.env, ...loadEnv(mode, ENV_DIRECTORY, "") };

  return defineConfig({
    envDir: ENV_DIRECTORY,
    plugins: [react(), AutoImportPlugin(AUTO_IMPORT_CONFIG), tsconfigPaths(), tailwindcss()],
  });
};
