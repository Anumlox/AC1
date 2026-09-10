import { Component } from '@angular/core';

@Component({
  selector: 'app-post3',
  imports: [],
  templateUrl: './post3.html',
  styleUrl: './post3.css',
})
export class Post3 {
  titulo: string = 'foto';
  autor: string = 'Joao';
  data = Date;
  conteudo: string = 'filmes';
  curtidas: number = 0;
  comentarios: string[] = [];
}
