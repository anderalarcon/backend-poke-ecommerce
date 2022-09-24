const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const Test = require("./models/test");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ data: "data" });
});

app.get("/create", async (req, res) => {
  const test = new Test({
    name: "ander",
    email: "ander@gmail.com",
  });
  try {
    const saved = test.save();
    res.status(200).json(saved);
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(
    "mongodb://ecommercedbarqsw:QdLLwrPDB1qbHa9CF5d3jxh7Okv8DtzQdIwbdqE6TtiDvYqZs9ESKIPYENSnq03NXMkJzZyX8wTrjUXlgbOMiw==@ecommercedbarqsw.mongo.cosmos.azure.com:10255/test?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ecommercedbarqsw@",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connect success"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log(`Server on port ${app.get("port")}`);
});
