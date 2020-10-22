import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router'

import { Subestacao} from '../subestacao'
import { SubestacaoService } from '../../subestacao.service'
import { from, Observable } from 'rxjs';

declare var google;


@Component({
  selector: 'app-subestacao-form',
  templateUrl: './subestacao-form.component.html',
  styleUrls: ['./subestacao-form.component.css']
})
export class SubestacaoFormComponent implements OnInit {
    zoom = 16
    center: google.maps.LatLngLiteral

    options: google.maps.MapOptions = {
      mapTypeId: 'roadmap',
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: 20,
      minZoom: 6,
    }

    subestacao: Subestacao;
    success: boolean = false;
    errors: String[];
    id: number;
    lati: number ;
    lon: number ;


  constructor( 
    private service: SubestacaoService, 
    private router: Router,
    private activatedRoute : ActivatedRoute) 
    {
      this.subestacao = new Subestacao();
   }

  ngOnInit(): void {
    this.atualizarMapa();
    
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
          this.service
          .getSubestacaoById(this.id)
          .subscribe( 
            response => this.subestacao = response,
            errorResponse => this.subestacao = new Subestacao()
            )
        }
      })
  }

  atualizarMapa(){
    this.lati = this.subestacao.latitude;
    this.lon = this.subestacao.longitude;
   
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: this.lati,
        lng: this.lon,
      }
    })
  }

  voltarLista(){
    this.router.navigate(['/subestacao/lista'])
  }


  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.subestacao) 
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
          this.errors = ['Erro ao atualizar, digite o Nome']
      })

    }else{
        this.service
          .salvar(this.subestacao)
          .subscribe( response => {
            this.success = true;
            this.errors = null; 
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })
    } 
  }
  
}
