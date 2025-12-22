import { inject, Injectable, signal } from '@angular/core';
import { Setor } from '../../shared/models/setor.model';

@Injectable({
  providedIn: 'root',
})
export class SetorService {
  
  // 1 Insercao - 2 Edicao
  private opcao:number=0;
  
  idEditado:number=0;
  Setor1: Setor = { SetorID: 1, Nome: 'Solda' };
  Setor2: Setor = { SetorID: 2, Nome: 'Montagem' };
  Setor3: Setor = { SetorID: 3, Nome: 'Inspeção' };
  Setor4: Setor = { SetorID: 4, Nome: 'Testes' };
  Setor5: Setor = { SetorID: 5, Nome: 'Embalagem' };
  Setor7: Setor = { SetorID: 7, Nome: 'Administração' };
  Setor8: Setor = { SetorID: 8, Nome: 'Supervisão' };
  Setor9: Setor = { SetorID: 0, Nome: 'Desconhecido' };
  //(solda → montagem → inspeção → testes → embalagem
  private setores = signal<Setor[]>([
    this.Setor1,
    this.Setor2,
    this.Setor3,
    this.Setor4,
    this.Setor5,
    this.Setor7,
    this.Setor8
  ]);
  
  readonly setoreslist = this.setores.asReadonly();
  

  getSetores(): Setor[] {
    return this.setores();
  }
  getSetorById(id: number): Setor | null {
    let setor = this.setores().find((setor) => setor.SetorID === id);
    return setor || null;
  }
  getSetorNameById(id: number): string {
    let setor = this.setores().find((setor) => setor.SetorID === id);
    return setor?.Nome || 'Desconhecido';
  }
  //this.users.update((users) => users.filter((user) => user.id !== usuarioId));
  removeSetor(id:number):void{
    this.setores.update((setores)=>setores.filter((setor)=> setor.SetorID!==id));
  }
  setIdEditado(id:number){
    this.idEditado=id;
  }
  getIdEdited():number{
    return this.idEditado;
  }

  addSetor(setor:Setor):void{
    this.setores.update((setores)=>[...setores,setor]);
  }

  setOpcao(op:number):void{
    this.opcao=op;
  }
  getOpcao():number{
    return this.opcao;
  }
}
