const uuid = require("uuid");
const express = require("express");
const app = express();
const port = 7777;

var data = [
  {
    id: 0,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  },
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
  },
];

app.get("/notes", (req, res) => {
  res.send(data);
});

app.post("/notes", (req, res) => {
  data.push({
    id: uuid.v4(),
    content: req.body.content,
  });
  res.send(data);
});

app.delete("/notes/:id", (req, res) => {
    data = data.filter((note) => note.id !== req.params.id);
    res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
