
import{Router} from "express";
import { userController } from "./controller";
import { verifyToken } from "../../middleware/jwt";

const route = Router();

// router.use(verifyToken)

// leer los usuarios

route.get("/",  userController.getUsers);
//route.get("/", verifyToken, userController.getUsers);

// leer un único usuario por id
route.get("/:id", userController.getUser);

// crear un usuario
//route.post("/", userController.createUser);

// eliminar un usuario por id
//route.delete("/:id", userController.deleteUser);

// actualizar un usuario por id
export default route;


/* 
import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/jwt.middleware";

const router = Router();

// path: http:localhost:3000/api/v1/users

// router.use(verifyToken)

// leer los usuarios
router.get("/", verifyToken, userController.getUsers);

// leer un único usuario por id
router.get("/:id", userController.getUser);

// crear un usuario
router.post("/", userController.createUser);

// eliminar un usuario por id

// actualizar un usuario por id

export default router;
 */