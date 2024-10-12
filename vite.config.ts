import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@/": path.resolve(__dirname, "./src"),
        "@/adapters": path.resolve(__dirname, "./src/components"),
        "@/pages": path.resolve(__dirname, "./src/pages"),
        "@/utils": path.resolve(__dirname, "./src/utils"),
        "@/assets": path.resolve(__dirname, "./src/assets"),
        "@/redux": path.resolve(__dirname, "./src/redux"),
        "@/services": path.resolve(__dirname, "./src/services"),
        "@/routes": path.resolve(__dirname, "./src/routes"),
        "@/models": path.resolve(__dirname, "./src/models"),
        "@/hooks": path.resolve(__dirname, "./src/hooks"),
        "@/components": path.resolve(__dirname, "./src/assets"),
        "@/modules": path.resolve(__dirname, "./src/utils"),
      },
    },
    build: {
      minify: isProduction ? "esbuild" : false, // Minify in production, not in development
      rollupOptions: {
        output: {
          manualChunks: isProduction ? undefined : undefined, // Optionally concatenate assets
        },
      },
    },
  };
});
