import express from "express";
import userRoute from "./Module/User/route";
//import authRoute from "./routes/auth.route";

const app = express();
const port = process.env.PORT || 5000;
const api = "/api/v1";
const user = "/user";
const path =  api+user;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(path, userRoute);
//app.use("/api/v1/user", userRoute);
//app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
  console.log(`URI : http://localhost:${port}${path}`);
});
