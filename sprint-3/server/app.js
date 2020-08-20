const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

// app.use(app.apiRoutes);
// apiRoutes.initialize(app);

app.listen(8080, console.log("app running at http://localhost:8080"));
