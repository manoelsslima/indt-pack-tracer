export interface Processo {
  Processo: string;
  ProcessoId: number;
  SetorIdOrigem: number;
  SetorIdDestino: number;
  ItemID: string;
  ItemSKU: string;
  DataHoraIn: string;
  DataHoraOut: string;
  Observacoes: string;
  Status: ProcessoStatus; // Pendente,Concluído,Defeito
}

export enum ProcessoStatus {
  PENDENTE = 'Pendente',
  CONCLUIDO = 'Concluido',
  DEFEITO = 'Defeito',
}
