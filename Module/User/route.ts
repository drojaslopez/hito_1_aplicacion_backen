
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
route.post("/", userController.createUser);

// eliminar un usuario por id
route.delete("/:id", userController.deleteUser);

// actualizar un usuario por id
route.put("/:id", userController.updateUser);

export default route;
