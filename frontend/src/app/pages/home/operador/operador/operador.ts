import { Component,inject } from '@angular/core';
import { ItemService } from '../../../../core/services/item-service';
import { Processo } from '../../../../shared/models/processo.model';
import { LoginService } from '../../../../core/services/login-service';
import { User } from '../../../../shared/models/user.model';
@Component({
  selector: 'app-operador',
  imports: [],
  templateUrl: './operador.html',
  styleUrl: './operador.css',
})
export class Operador {
  private servicoItem = inject(ItemService);
  private servico = inject(LoginService);

  //processos = this.servicoItem.getProcessos();
  
  

  authenticatedUser(): User | null {
    let result: User;
    if (this.servico.authenticatedUser() !== 'NotFound') {
      result = JSON.parse(this.servico.authenticatedUser());
      return result;
    }
    return null;
  }

  getSetor(): number {
    if (this.authenticatedUser() !== null) {
      let setor: number = this.authenticatedUser()!.setorId;
      return setor;
    }
    return 0
  }

  setorAtual:number=this.getSetor();
  meuProcesso = this.servicoItem.getProcessoCorrente(this.setorAtual);


}
