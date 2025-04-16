import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000", // Make sure backend runs here
				changeOrigin: true,
				secure: false, // Set false for HTTP (true for HTTPS)
			},
		},
	},
});
