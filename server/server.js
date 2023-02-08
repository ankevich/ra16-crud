const uuid = require("uuid");
const express = require("express");

const app = express();
const port = 7777;

// Disable CORS for all routes and requests including DELETE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var data = [
  {
    id: "0",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  },
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  },
];

app.get("/notes", (req, res) => {
  console.log("GET /notes");
  res.json(data);
});

app.post("/notes", (req, res) => {
  data.push({
    id: uuid.v4(),
    content: req.body.content,
  });
  res.send(data);
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  console.log("DELETE /notes/" + id);
  data = data.filter((note) => note.id !== id);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
