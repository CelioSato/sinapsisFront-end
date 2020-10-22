import { Injectable } from '@angular/core';
import { Subestacao } from './subestacao/subestacao';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SubestacaoService {

  apiURL: string = environment.apiURLBase + '/subestacoes';

  constructor( private http: HttpClient ) {

   }

   salvar( subestacao: Subestacao) : Observable <Subestacao>{
      return this.http.post<Subestacao>(`${this.apiURL}`, subestacao);
   }

   atualizar( subestacao: Subestacao) : Observable <any>{
    return this.http.put<Subestacao>(`${this.apiURL}/${subestacao.id}`, subestacao );
 }

  getSubestacoes() : Observable<Subestacao[]>{
    return this.http.get<Subestacao[]>(this.apiURL);
  }

  getSubestacaoById(id: number) : Observable<Subestacao> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar( subestacao: Subestacao) : Observable <any>{
    return this.http.delete<Subestacao>(`${this.apiURL}/${subestacao.id}` );
 }
}
