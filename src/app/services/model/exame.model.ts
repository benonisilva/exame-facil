import { Procedimento } from "./procedimento.model";

export interface Exame {
    procedimentos: Procedimento[];
    grupos: number[];
    id: number;
    nome: string;
}