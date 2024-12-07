import express from "express";
import { getClientsHandler, addClientHandler, updateClientHandler } from "../controllers/clientController.js";

const router = express.Router();

router.get("/clients", getClientsHandler)
router.post("/clients", addClientHandler);
router.post("/clients", updateClientHandler);

export default router;
