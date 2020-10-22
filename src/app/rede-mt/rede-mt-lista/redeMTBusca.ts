import { Subestacao } from '../../subestacao/subestacao'

export class RedeMTBusca{
    id : number;
    codigo: string;
    nome: string;
    tensao_nominal: string;
    sub: Subestacao;
}