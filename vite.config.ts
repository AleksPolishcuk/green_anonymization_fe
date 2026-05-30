import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-phone-input-2"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("recharts")) return "vendor-charts";
          if (id.includes("@mui/icons-material")) return "vendor-mui-icons";
          if (id.includes("@mui/")) return "vendor-mui";
          if (id.includes("react-router")) return "vendor-router";
          if (id.includes("@reduxjs/") || id.includes("react-redux"))
            return "vendor-redux";
          if (id.includes("react-dom") || id.includes("react/"))
            return "vendor-react";
        },
      },
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      app: path.resolve(__dirname, "src/app"),
      features: path.resolve(__dirname, "src/features"),
      shared: path.resolve(__dirname, "src/shared"),
      services: path.resolve(__dirname, "src/services"),
      assets: path.resolve(__dirname, "src/assets"),
      Layouts: path.resolve(__dirname, "src/Layouts/index.tsx"),
      constants: path.resolve(__dirname, "src/constants"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
});
