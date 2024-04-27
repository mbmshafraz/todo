import app from "./app.mjs";

const PORT = parseInt(process.env.PORT) || 8080;
const pool = require("./db")


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
