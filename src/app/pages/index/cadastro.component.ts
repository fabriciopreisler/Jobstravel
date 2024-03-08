import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  novoCadastro: any = {};

  constructor(private cadastroService: CadastroService) { }

  adicionarCadastro() {
    this.cadastroService.addCadastro(this.novoCadastro)
      .subscribe(() => {
        console.log('Novo cadastro adicionado com sucesso!');
        this.novoCadastro = {}; // Limpa o objeto para o próximo cadastro
      });
  }
}