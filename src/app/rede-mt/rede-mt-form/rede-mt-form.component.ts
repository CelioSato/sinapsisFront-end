import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subestacao } from '../../subestacao/subestacao';
import { SubestacaoService } from '../../subestacao.service'
import { RedeMt} from '../redeMT'
import { RedeMtService } from '../../rede-mt.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-rede-mt-form',
  templateUrl: './rede-mt-form.component.html',
  styleUrls: ['./rede-mt-form.component.css']
})
export class RedeMtFormComponent implements OnInit {

  subestacoes: Subestacao[] = []
  servico: RedeMt;
  success: boolean = false;
  errors: String[];
  id: number;
  ida: boolean;

  constructor(
    private subestacaoService: SubestacaoService,
    private service: RedeMtService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

    this.servico = new RedeMt();
   }

  ngOnInit(): void {
    let params : Observable<any> = this.activatedRoute.params;
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
       if(this.id){
         this.ida = false;
        this.service
        .getRedeMtByID(this.id)
        .subscribe( 
          response => this.servico = response,
          errorResponse => this.servico = new RedeMt()
          ) 
        } else {
          this.ida = true;
        }
    })

    this.subestacaoService
      .getSubestacoes()
      .subscribe( response => this.subestacoes = response);
  }

  voltarLista(){
    this.router.navigate(['/rede-mt/lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.servico)
        .subscribe(response =>{
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['Erro ao atualizar a RedeMT.']
        })

    }else{
      this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null; 
        this.servico = new RedeMt();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
   
  }

}
