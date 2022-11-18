const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/api/tugas/xirpl1", (req,res) => {
    let response = {
    "Tittle": "XI RPL 1",
    "SubTittle": "Semangatku menjadi programmer :)",
    "Data":"task not found",
    "Message": "Selamat Istirahat anak anak R1 yg cantik, ganteng dan pinter pinter",
    "Message":"Selamat Istirahat anak anak R1 yg cantik, ganteng dan pinter pinter",
    "Note":"jangan jangongan didepan kelas, kalau ke kantin/kopsis gantian, setelah itu cepet kembali ke dalam kelas"
    }
    res.json(response)
   })  
app.listen(8000, () => {
    console.log("Server run on port 8000");
   })