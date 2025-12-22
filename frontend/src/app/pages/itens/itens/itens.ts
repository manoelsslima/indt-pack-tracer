import { Component,inject } from '@angular/core';
import { ItemService } from '../../../core/services/item-service';
import { SetorService } from '../../../core/services/setor-service';

@Component({
  selector: 'app-itens',
  imports: [],
  templateUrl: './itens.html',
  styleUrl: './itens.css',
})
export class Itens {

  private itemServico = inject(ItemService);

  meusProcessos=this.itemServico.getProcessos();

  newProcesso():void{
    alert('Novo Processo');
  }

  imprimirQr():void{
    alert('Imprimindo QrCode');
  }

  getSetorIdUsuario():number{
    return this.itemServico.getSetorId();
  }

  SetorIdUsuario=this.getSetorIdUsuario();

}
