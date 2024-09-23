var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Contratante from "../models/contratante-model.js";
export class ContratanteService {
    createContratante(nomeCompleto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratante = yield Contratante.create({ nomeCompleto });
                return contratante;
            }
            catch (error) {
                throw new Error(`Unable to create contratante: ${error.message}`);
            }
        });
    }
    getAllContratantes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Contratante.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch contratantes: ${error.message}`);
            }
        });
    }
    updateContratante(id, nomeCompleto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratante = yield Contratante.findByPk(id);
                if (!contratante) {
                    return null; // Contratante não encontrado
                }
                contratante.nomeCompleto = nomeCompleto;
                yield contratante.save();
                return contratante;
            }
            catch (error) {
                throw new Error(`Unable to update contratante: ${error.message}`);
            }
        });
    }
    deleteContratante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratante = yield Contratante.findByPk(id);
                if (!contratante) {
                    return false; // Contratante não encontrado
                }
                yield contratante.destroy();
                return true; // Deleção bem-sucedida
            }
            catch (error) {
                throw new Error(`Unable to delete contratante: ${error.message}`);
            }
        });
    }
    getContratanteById(id) {
        throw new Error("Method not implemented.");
    }
}
