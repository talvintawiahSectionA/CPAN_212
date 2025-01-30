const express = require("express");
const app = express();
const routes = require("./routes/index");

const PORT = 8000;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
