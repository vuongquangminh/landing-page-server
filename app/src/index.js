const express = require("express");
const cors = require("cors");
const routeApp = require("./routes");
const app = express();
const port = 8080;

// Allow requests from your Next.js frontend
app.use(
  cors({
    origin: "http://localhost:3000", // or your actual frontend domain
    credentials: true, // if you use cookies/auth
  })
);

app.use(express.json());

routeApp(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
