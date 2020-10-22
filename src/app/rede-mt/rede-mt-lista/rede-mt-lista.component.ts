import { Component, OnInit } from '@angular/core';
import { RedeMtService } from 'src/app/rede-mt.service';
import { RedeMt } from '../redeMT';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-rede-mt-lista',
  templateUrl: './rede-mt-lista.component.html',
  styleUrls: ['./rede-mt-lista.component.css']
})
export class RedeMtListaComponent implements OnInit {
  
  nome: string;
  lista: RedeMt[] = [] ;
  message: string;
  redeSelecionada : RedeMt;
  mensagemSucesso : string;
  mensagemErro : string;
  ida: number;

  constructor(
    private service: RedeMtService,
    private router: Router) { }

  ngOnInit(): void {
  
  }

  novaRedeMT(){
    this.router.navigate(['/rede-mt/form'])
  }

  alterarRede(id: number){
    this.router.navigate(['/rede-mt/form',id])
  }

  preparaDeletar(rede : RedeMt){
    this.redeSelecionada = rede;
  }

  deleteRede(){
    this.service
      .deletar(this.redeSelecionada)
      .subscribe(response => {
          this.mensagemSucesso = 'Rede deletada com sucesso!'
          this.consultar();
        },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar a rede.'
      )
  }

  consultar(){
    this.service
    .buscar(this.nome)
    .subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0){
        this.message = "Nenhuma Rede encontrada."
      } else {
        this.message = null;
      }
    });
  }

}
