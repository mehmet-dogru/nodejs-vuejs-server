const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/errorMiddleware");

require("dotenv").config();
require("./config/database");

const postRouter = require("./routers/post_router");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "NodeJs with Vue",
  });
});

app.use("/api/posts", postRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server ${process.env.PORT} portunda çalışıyor.`);
});
