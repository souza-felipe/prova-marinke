import { Request, Response } from 'express';
import { ContratanteService } from "../services/contratante-services";

export class ContratanteController {
  private contratanteService: ContratanteService;

  constructor() {
    this.contratanteService = new ContratanteService();
  }

  public async createContratante(req: Request, res: Response): Promise<Response> {
    try {
      const { nomeCompleto } = req.body;
      const newContratante = await this.contratanteService.createContratante(nomeCompleto);
      return res.status(201).json(newContratante);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create contratante", error });
    }
  }

  public async getAllContratantes(req: Request, res: Response): Promise<Response> {
    try {
      const contratantes = await this.contratanteService.getAllContratantes();
      return res.status(200).json(contratantes);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch contratantes", error });
    }
  }

  public async updateContratante(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nomeCompleto } = req.body;

    try {
      const updatedContratante = await this.contratanteService.updateContratante(id, nomeCompleto);
      if (!updatedContratante) {
        return res.status(404).json({ message: "Contratante not found" });
      }
      return res.status(200).json(updatedContratante);
    } catch (error) {
      return res.status(500).json({ message: "Failed to update contratante", error });
    }
  }

  public async deleteContratante(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const deleted = await this.contratanteService.deleteContratante(id);
      if (!deleted) {
        return res.status(404).json({ message: "Contratante not found" });
      }
      return res.status(204).send(); 
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete contratante", error });
    }
  }
}
