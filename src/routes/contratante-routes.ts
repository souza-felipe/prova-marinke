import { Router } from 'express';
import { ContratanteController } from "../controllers/contratante-controller";

const router = Router();
const contratanteController = new ContratanteController();

router.post("/", (req, res) => contratanteController.createContratante(req, res));

router.get("/", (req, res) => contratanteController.getAllContratantes(req, res));

router.put("/:id", (req, res) => contratanteController.updateContratante(req, res));

router.delete("/:id", (req, res) => contratanteController.deleteContratante(req, res));

export default router;
