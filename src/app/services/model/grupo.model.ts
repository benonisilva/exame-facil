import { Exame } from "./exame.model";

export interface Grupo {
    id: number;
    grupo: number;
    nome: string; 
    observacao?:string;
    exames: Exame[]
}