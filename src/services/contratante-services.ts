import Contratante from "../models/contratante-model";

export class ContratanteService {
  public async createContratante(nomeCompleto: string): Promise<Contratante> {
    try {
      const contratante = await Contratante.create({ nomeCompleto });
      return contratante;
    } catch (error) {
      throw new Error(`Unable to create contratante: ${(error as Error).message}`);
    }
  }

  public async getAllContratantes(): Promise<Contratante[]> {
    try {
      return await Contratante.findAll();
    } catch (error) {
      throw new Error(`Unable to fetch contratantes: ${(error as Error).message}`);
    }
  }

  public async updateContratante(id: string, nomeCompleto: string): Promise<Contratante | null> {
    try {
      const contratante = await Contratante.findByPk(id);
      if (!contratante) {
        return null; // Contratante não encontrado
      }
      contratante.nomeCompleto = nomeCompleto;
      await contratante.save();
      return contratante;
    } catch (error) {
      throw new Error(`Unable to update contratante: ${(error as Error).message}`);
    }
  }

  public async deleteContratante(id: string): Promise<boolean> {
    try {
      const contratante = await Contratante.findByPk(id);
      if (!contratante) {
        return false; // Contratante não encontrado
      }
      await contratante.destroy();
      return true; // Deleção bem-sucedida
    } catch (error) {
      throw new Error(`Unable to delete contratante: ${(error as Error).message}`);
    }
  }

  getContratanteById(id: string) {
    throw new Error("Method not implemented.");
  }
}
