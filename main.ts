import express from "express";
import userRoute from "./module/user/route";
import authRoute from "./module/auth/route";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });


const app = express();
const port = process.env.PORT || 5000;
const api = "/api/v1";
const user = "/user";
const auth = "/auth";
const pathUser =  api+user;
const pathAuth =  api+auth;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(pathUser, userRoute);
app.use(pathAuth, authRoute);
//app.use("/api/v1/user", userRoute);
//app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
  console.log(`URI : http://localhost:${port}${pathUser}`);
  console.log(`URI : http://localhost:${port}${pathAuth}`);
});


//app.use(express.static(join(__dirname, "/dist"))


/**
 



 */