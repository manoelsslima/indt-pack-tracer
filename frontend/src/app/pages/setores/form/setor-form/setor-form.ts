import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { SetorService } from '../../../../core/services/setor-service';
import { Setor } from '../../../../shared/models/setor.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setor-form',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './setor-form.html',
  styleUrl: './setor-form.css',
})
export class SetorForm {
  private setorService = inject(SetorService);
  private router = inject(Router);
  
  id: number = this.setorService.getIdEdited();
  
  myOpcao:number=this.setorService.getOpcao();

  setor = this.setorService.getSetorById(this.id);
  

  private formBuilder = inject(FormBuilder);
  setorForm = this.formBuilder.group({
    setorId: [this.setor?.id],
    nome: [this.setor?.nome, Validators.required],
  });

  onSubmit() {
    if (this.setorForm.valid) {
      const setor1: Setor = {
        nome: this.setorForm.value.nome!,
        id: this.setorForm.value.setorId!,
      };
      //const {setorId, nome}
      this.setorService.addSetor(setor1);
      console.log('Setor salvo:', this.setorForm.value);
    }
  }
  cancelar(){
    this.router.navigate(['home/admin/setores']);
  }


}
