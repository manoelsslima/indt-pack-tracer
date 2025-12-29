import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { SetorService } from '../../../core/services/setor-service';
import { Setor } from '../../../shared/models/setor.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setor',
  imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './setor.html',
  styleUrl: './setor.css',
})
export class SetorComponent {

  formSetor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private setorService: SetorService,
    private snackBar: MatSnackBar
  ) {
    this.formSetor = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
    });
  };

  salvar() {
    if (this.formSetor.valid) {
      let setor: Setor = {
        id: this.formSetor.get('id')?.value,
        nome: this.formSetor.get('nome')?.value,
      };
      this.setorService.addSetor(setor);
      this.snackBar.open('Setor salvo com sucesso!', 'Fechar', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' });
      this.formSetor.reset();
    } else {
      console.log('Formulário inválido');
    }
  }
}