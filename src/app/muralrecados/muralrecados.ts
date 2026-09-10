import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-muralrecados',
  imports: [FormsModule, CommonModule],
  templateUrl: './muralrecados.html',
  styleUrl: './muralrecados.css'
})
export class MuralRecados {
  recados: string[] = [
    'Reunião às 14h na sala 3',
    'Não esqueça de trazer o notebook',
    'Feliz aniversário, equipe!',
    'Entrega do projeto até sexta-feira'
  ];

  recadoSelecionado: string = '';
  novoRecado: string = '';
  lido: boolean = false;
  curtidas: number = 0;

  selecionarRecado(recado: string) {
    this.recadoSelecionado = recado;
    this.lido = false;
    this.curtidas = 0;
  }

  publicarRecado() {
    this.recados.push(this.novoRecado);
    this.novoRecado = '';
  }

  alternarLeitura() {
    this.lido = !this.lido;
  }

  curtir() {
    this.curtidas++;
  }
}