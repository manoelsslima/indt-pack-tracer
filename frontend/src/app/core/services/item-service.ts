import { Injectable, signal, inject } from '@angular/core';
import { Processo, ProcessoStatus } from '../../shared/models/processo.model';
import { readonly } from '@angular/forms/signals';
import { LoginService } from './login-service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private servico = inject(LoginService);

  private processos = signal<Processo[]>([
    {
      ItemID: '122',
      ItemSKU: 'SKU122',
      Lote: 'L000',
      Quantidade: 10,
      Expedicao: false,
      ProcessoId: 4,
      Setor1: 0,
      Setor2: 0,
      Setor3: 0,
      Setor4: 0,
      Setor5: 0,
      DataHoraCriada: '2024-01-01T10:00:00Z',
      DataHoraInicial: '',
      DataHoraFinal: '',
      Observacoes: '',
      Status: ProcessoStatus.PENDENTE,
    },

    {
      ItemID: '123',
      ItemSKU: 'SKU123',
      Lote: 'L001',
      Quantidade: 10,
      Expedicao: false,
      ProcessoId: 1,
      Setor1: 1,
      Setor2: 0,
      Setor3: 0,
      Setor4: 0,
      Setor5: 0,
      DataHoraCriada: '2024-01-01T10:00:00Z',
      DataHoraInicial: '',
      DataHoraFinal: '',
      Observacoes: '',
      Status: ProcessoStatus.PENDENTE,
    },
    {
      ItemID: '124',
      ItemSKU: 'SKU124',
      Lote: 'L002',
      Quantidade: 10,
      Expedicao: false,
      ProcessoId: 2,
      Setor1: 1,
      Setor2: 2,
      Setor3: 3,
      Setor4: 0,
      Setor5: 0,
      DataHoraCriada: '2024-01-01T10:00:00Z',
      DataHoraInicial: '',
      DataHoraFinal: '',
      Observacoes: '',
      Status: ProcessoStatus.PENDENTE,
    },
  ]);
  readonly processosList = this.processos.asReadonly();

  addProcesso(processo: Processo): void {
    this.processos.update((processos) => [...processos, processo]);
  }

  getProcessos(): Processo[] {
    return this.processos();
  }

  getprocessoById(id: number): Processo | null {
    let processo = this.processos().find((processo) => processo.ProcessoId === id);
    return processo || null;
  }

  getProcessoCorrente(idSetor: number): Processo | null {
    for (let i = 0; i < this.processos().length; i++) {
      if (this.processos()[i].Status === ProcessoStatus.PENDENTE) {
        //setor1
        if (this.processos()[i].Setor1 === 0 && idSetor === 1) {
          return this.processos()[i];
        } else if (
          //setor2
          this.processos()[i].Setor1 !== 0 &&
          this.processos()[i].Setor2 === 0 &&
          idSetor - 1 === this.processos()[i].Setor1
        ) {
          return this.processos()[i];
        } else if (
          //setor3
          this.processos()[i].Setor2 !== 0 &&
          this.processos()[i].Setor3 === 0 &&
          idSetor - 1 === this.processos()[i].Setor2
        ) {
          return this.processos()[i];
        } else if (
          //setor4
          this.processos()[i].Setor3 !== 0 &&
          this.processos()[i].Setor4 === 0 &&
          idSetor - 1 === this.processos()[i].Setor3
        ) {
          return this.processos()[i];
        } else if (
          //setor5
          this.processos()[i].Setor4 !== 0 &&
          this.processos()[i].Setor5 === 0 &&
          idSetor - 1 === this.processos()[i].Setor4
        ) {
          return this.processos()[i];
        }
      }
    }
    return null;
  }

  salvarOperadorProcesso(processoAtualizado: Processo): void {
    this.processos.update((processos) =>
      processos.map((p) =>
        p.ProcessoId === processoAtualizado.ProcessoId ? processoAtualizado : p
      )
    );
  }

  updateProcesso(processoId: number, setorId: number): void {
    let newProcesso: Processo;
    newProcesso = this.getprocessoById(processoId)!;
    if (newProcesso.Status === ProcessoStatus.PENDENTE) {
      if (newProcesso.Setor1 === 0) {
        newProcesso.Setor1 = 1;
      } else if (newProcesso.Setor2 === 0) {
        newProcesso.Setor2 = 2;
      } else if (newProcesso.Setor3 === 0) {
        newProcesso.Setor3 = 3;
      } else if (newProcesso.Setor4 === 0) {
        newProcesso.Setor4 = 4;
      } else if (newProcesso.Setor5 === 0) {
        newProcesso.Setor5 = 5;
        newProcesso.Status = ProcessoStatus.CONCLUIDO;
      }
      this.salvarOperadorProcesso(newProcesso);
    }
    console.log(newProcesso);
  }

  authenticatedUser(): User | null {
    let result: User;
    if (this.servico.authenticatedUser() !== 'NotFound') {
      result = JSON.parse(this.servico.authenticatedUser());
      return result;
    }
    return null;
  }

  getSetorId(): number {
    if (this.authenticatedUser() !== null) {
      let setor: number = this.authenticatedUser()!.setorId;
      return setor;
    }
    return 0;
  }
}
