import { Component, inject, signal } from '@angular/core';
import { Processo, ProcessoStatus } from '../../shared/models/processo.model';
import { ItemService } from '../../core/services/item-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private itemServico = inject(ItemService);
  processos: Processo[] = this.itemServico.getProcessos();

  qdeProcessosTotal: number = this.processos.length;
  qdeProcessosConcluido = signal<number>(0);
  qdeProcessosDefeito = signal<number>(0);
  qdeProcessosPendente = signal<number>(0);

  qdeProcessosExpedicaoSim = signal<number>(0);
  qdeProcessosExpedicaoNao = signal<number>(0);

  inicializarValores(): void {
    this.qdeProcessosConcluido.set(0);
    this.qdeProcessosDefeito.set(0);
    this.qdeProcessosPendente.set(0);
    this.qdeProcessosExpedicaoSim.set(0);
    this.qdeProcessosExpedicaoNao.set(0);
  }
  qdeDeProcessosPorStatus(): void {
    for (let i = 0; i < this.processos.length; i++) {
      if (this.processos[i].Status === ProcessoStatus.CONCLUIDO) {
        this.qdeProcessosConcluido.set(this.qdeProcessosConcluido() + 1);
      } else if (this.processos[i].Status === ProcessoStatus.PENDENTE) {
        this.qdeProcessosPendente.set(this.qdeProcessosPendente() + 1);
      } else if (this.processos[i].Status === ProcessoStatus.DEFEITO) {
        this.qdeProcessosDefeito.set(this.qdeProcessosDefeito() + 1);
      }
    }
  }

  qdeDeProcessosPorExpedicao(): void {
    for (let i = 0; i < this.processos.length; i++) {
      if (this.processos[i].Expedicao === true) {
        this.qdeProcessosExpedicaoSim.set(this.qdeProcessosExpedicaoSim() + 1);
      }
      this.qdeProcessosExpedicaoNao.set(this.qdeProcessosTotal - this.qdeProcessosExpedicaoSim());
      console.log(this.processos[i]);
    }
  }

  rodarConsulta() {
    this.inicializarValores();
    this.qdeDeProcessosPorStatus();
    this.qdeDeProcessosPorExpedicao();
  }
}
