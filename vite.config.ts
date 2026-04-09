import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";
import path from "path";

export default defineConfig({
    plugins: [react(), eslint()],
    envDir: "./env",
    css: {
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: '@import "@/assets/styles/scss/mixin.module.scss";',
        //     }
        // },
        modules: {
            localsConvention: "camelCaseOnly",
            generateScopedName: "[local]"
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
        extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
        ]
    },
    server: {
        host: "0.0.0.0",
        port: 2333
    }
})