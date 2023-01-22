// const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// console.log(process.env.DB_CONNECT);

const port = process.env.PORT || 5000;

const TodoItemRoute = require("./Routes/todoItemsRoutes");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
