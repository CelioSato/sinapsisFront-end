import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { SubestacaoService } from 'src/app/subestacao.service';
import { Subestacao } from '../subestacao';


@Component({
  selector: 'app-subestcao-lista',
  templateUrl: './subestcao-lista.component.html',
  styleUrls: ['./subestcao-lista.component.css']
})
export class SubestcaoListaComponent implements OnInit {

  subestcaoes: Subestacao[] = [];
  subestacaoSelecionada: Subestacao;
  mensagemSuccess : string;
  mensagemErro : string;

  constructor( 
    private service: SubestacaoService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getSubestacoes()
    .subscribe( resposta => this.subestcaoes = resposta);
  }

  novoCadastro (){
    this.router.navigate(['/subestacao/form'])
  }

  preparDeletar(subestacao : Subestacao){
      this.subestacaoSelecionada = subestacao;
  }

  

  deleteSubestacao(){
    this.service
      .deletar(this.subestacaoSelecionada)
      .subscribe( 
        response => {
          this.mensagemSuccess ='Subestação deletada com successo!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Erro ao deletar a subestacao.'
      )
  }

}
