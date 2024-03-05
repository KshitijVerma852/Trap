const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(4050, () => {
	console.log("Listening on http://localhost:4050");
});
