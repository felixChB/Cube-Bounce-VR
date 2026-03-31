export default defineConfig({
  resolve: {
    alias: { "@game/shared": resolve(__dirname, "../shared/src") }
    // Point to src directly in dev — Vite compiles it on the fly
  }
})