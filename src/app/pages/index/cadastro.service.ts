import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'assets/cadastros.json'; // Caminho para o arquivo JSON local

  constructor(private http: HttpClient) { }

  // Método para obter os cadastros do arquivo JSON
  getCadastros(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para adicionar um novo cadastro ao arquivo JSON
  addCadastro(novoCadastro: any): Observable<any> {
    let cadastros = this.getCadastros();
    //cadastros.push(novoCadastro); // Adiciona o novo cadastro à lista existente
    return this.http.put(this.apiUrl, cadastros);
  }
}