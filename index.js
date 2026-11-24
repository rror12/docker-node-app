// import express from "express";
// import { createClient } from "redis";

// const app = express();
// const PORT = 3000;

// // Redis container ka naam
// const client = createClient({
//   url: "redis://my-redis:6379",
// });

// client.on("error", (err) => console.log("Redis Error:", err));

// await client.connect();

// app.get("/", async (req, res) => {
//   const visits = await client.incr("visits");

//   res.send(
//     `Hello Rohit! Is page ko ab tak ${visits} baar visit kiya gaya hai.`,
//   );
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require("express");
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET = process.env.APP_SECRET || "No secret found";

app.get("/", (req, res) => {
  res.send(`Hello Rohit! Secret loaded safely: ${SECRET}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
