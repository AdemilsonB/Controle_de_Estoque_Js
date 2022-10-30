import express from "express"
import cors from "cors";
import {routes} from "./configs/routes"
import {mongoose} from "./configs/database"

const app = express()
const db = mongoose

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000")
})