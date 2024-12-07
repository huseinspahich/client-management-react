import express from "express";
import { getClientsHandler, addClientHandler, updateClientHandler,deleteClientHandler,searchClientsHandler } from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getClientsHandler)
router.post("/clients", addClientHandler);
router.put("/clients/:id", updateClientHandler);
router.delete("/clients/:id", deleteClientHandler);
router.get("/clients/search", searchClientsHandler);

export default router;
