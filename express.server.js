const express = require("express");
const Mock = require("mockjs");
const app = express();

app.get("/", function (req, res) {
  res.send("demo of node");
});

app.post("/api/post", (_, res) => {
  res.send(
    Mock.mock({
      msg: "@name",
      success: "@boolean",
      text: "post",
    })
  );
});

app.get("/api/get", (_, res) => {
  res.send(
    Mock.mock({
      msg: "@name",
      success: "@boolean",
      text: "get",
    })
  );
});

const port = 8000;
app.listen(port, () => {
  console.log(`express server starting at: http:127.0.0.1:${port}`);
});
