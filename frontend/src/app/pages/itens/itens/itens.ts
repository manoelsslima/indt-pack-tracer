import { Component,inject } from '@angular/core';
import { ItemService } from '../../../core/services/item-service';

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

}
