import { Component,inject } from '@angular/core';
import { SetorService } from '../../../core/services/setor-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setores',
  imports: [],
  templateUrl: './setores.html',
  styleUrl: './setores.css',
})
export class Setores {
  private servicoSetor = inject(SetorService);
  private router = inject(Router);
  setores = this.servicoSetor.getSetores();

  removerSetor(id:number):void{
    this.servicoSetor.removeSetor(id);
  }

  alterarSetor(id:number):void{
    this.servicoSetor.setIdEditado(id);
    this.servicoSetor.setOpcao(2);
    this.router.navigate(['home/admin/setor-form']);
  }

}
