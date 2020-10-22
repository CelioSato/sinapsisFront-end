import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedeMt } from './rede-mt/redeMT';
import { environment } from '../environments/environment'
import { RedeMTBusca } from './rede-mt/rede-mt-lista/redeMTBusca';

@Injectable({
  providedIn: 'root'
})
export class RedeMtService {

  apiURL: string = environment.apiURLBase + '/redes';

  constructor(private http: HttpClient) {}

  salvar(redeMt : RedeMt) : Observable<RedeMt>{
    return this.http.post<RedeMt>(this.apiURL, redeMt);
  }

  buscar(nome: string): Observable<RedeMTBusca[]>{
    const httpParams = new HttpParams().set("nome", nome);
    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }

  atualizar( rede: RedeMt) : Observable <any>{
    return this.http.put<RedeMt>(`${this.apiURL}/${rede.id}`, rede );
 }

  deletar( rede: RedeMt) : Observable <any>{
    return this.http.delete<RedeMt>(`${this.apiURL}/${rede.id}` );
 }

  getRedeMtByID(id: number) : Observable<RedeMt>{
    return this.http.get<any>(`${this.apiURL}/${id}` );
  }

}
