import { inject, Injectable, signal } from '@angular/core';
import { Setor } from '../../shared/models/setor.model';

@Injectable({
  providedIn: 'root',
})
export class SetorService {
  
  // 1 Insercao - 2 Edicao
  private opcao:number=0;
  
  idEditado:number=0;
  Setor1: Setor = { id: 1, nome: 'Solda' };
  Setor2: Setor = { id: 2, nome: 'Montagem' };
  Setor3: Setor = { id: 3, nome: 'Inspeção' };
  Setor4: Setor = { id: 4, nome: 'Testes' };
  Setor5: Setor = { id: 5, nome: 'Embalagem' };
  Setor7: Setor = { id: 7, nome: 'Administração' };
  Setor8: Setor = { id: 8, nome: 'Supervisão' };
  Setor9: Setor = { id: 0, nome: 'Desconhecido' };
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
    let setor = this.setores().find((setor) => setor.id === id);
    return setor || null;
  }
  getSetorNameById(id: number): string {
    let setor = this.setores().find((setor) => setor.id === id);
    return setor?.nome || 'Desconhecido';
  }
  //this.users.update((users) => users.filter((user) => user.id !== usuarioId));
  removeSetor(id:number):void{
    this.setores.update((setores)=>setores.filter((setor)=> setor.id!==id));
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
