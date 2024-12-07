import express from "express";
import { getClientsHandler, addClientHandler, updateClientHandler,deleteClientHandler } from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getClientsHandler)
router.post("/clients", addClientHandler);
router.put("/clients/:id", updateClientHandler);
router.delete("/clients/:id", deleteClientHandler);


export default router;
