import express from "express";
//import dotenv from 'dotenv'; 
import userRoute from "./Module/User/route";

//import authRoute from "./routes/auth.route";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute);
//app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
