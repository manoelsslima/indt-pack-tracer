export interface Processo {
  ItemID: string;
  ItemSKU: string;
  Lote: string;
  Quantidade: number;
  Expedicao: boolean;
  ProcessoId: number;
  Setor1: number;
  Setor2: number;
  Setor3: number;
  Setor4: number;
  Setor5: number;
  DataHoraCriada: string;
  DataHoraInicial: string;
  DataHoraFinal: string;
  Observacoes: string;
  Status: ProcessoStatus; // Pendente,Concluído,Defeito
}
export enum ProcessoStatus {
  PENDENTE = 'Pendente',
  CONCLUIDO = 'Concluido',
  DEFEITO = 'Defeito',
}