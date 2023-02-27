import { Exame } from "./exame.model";

export interface Grupo {
    id: number;
    nome: string;
    grupos: number[];
    exames: Exame[];
    isNew?: boolean;
}