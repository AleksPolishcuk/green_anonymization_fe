import { preview } from "vite";

const port = process.env.PORT || 3000;

preview({
  preview: {
    port: parseInt(port),
    host: "0.0.0.0",
  },
}).then((server) => {
  console.log(`Preview server running at http://localhost:${port}`);
});
