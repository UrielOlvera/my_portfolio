const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const port = 3000

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + '/assets'));

router.get('/', (req, res) => {
  res.render("index")
})

app.use("/", router)
app.listen(port, () => {
  console.log(`listenin on http://localhost:${port}`)
})