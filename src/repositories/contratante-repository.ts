import Contratante from "../models/contratante-model";

export class ContratanteRepository {
  
  public async create(data: { nomeCompleto: string }): Promise<Contratante> {
    try {
      const contratante = await Contratante.create(data);
      return contratante;
    } catch (error) {
      throw new Error(`Unable to create contratante: ${(error as Error).message}`);
    }
  }

  public async findAll(): Promise<Contratante[]> {
    try {
      return await Contratante.findAll();
    } catch (error) {
      throw new Error(`Unable to fetch contratantes: ${(error as Error).message}`);
    }
  }


  public async findById(id: number): Promise<Contratante | null> {
    try {
      return await Contratante.findByPk(id);
    } catch (error) {
      throw new Error(`Unable to find contratante with ID ${id}: ${(error as Error).message}`);
    }
  }
}
