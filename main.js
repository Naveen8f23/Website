const express = require("express")
const app = express() 
const port = 5000

app.get("/", (req, res) => {
	res.send("Dinesh Adhithya - Naveen Chandhar");
})

app.listen(port, () => {
	console.log("Website is running on port ${port}");
})
