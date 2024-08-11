const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb+srv://admin:admin@mern.kzghapm.mongodb.net/?retryWrites=true&w=majority&appName=MERN");

app.get("/banners", async (req, res) => {
    await client.connect();
    const banner = await client.db("bannerDB").collection("banners").findOne({});
    res.json(banner);
});

app.post("/insert", async (req, res) => {
    await client.connect();
    const { acknowledged } = await client.db("bannerDB").collection("banners").insertOne({"description":req.body.description,"timer":req.body.timer,"link":req.body.link,"visible":req.body.visible});
    if(acknowledged){
        res.json({"msg":"record saved successfully !!!"});
    }else{
        res.json({"msg":"record not saved successfully !!!"});
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
