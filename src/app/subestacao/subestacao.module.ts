import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'

import { SubestacaoRoutingModule } from './subestacao-routing.module';
import { SubestacaoFormComponent } from './subestacao-form/subestacao-form.component';
import { SubestcaoListaComponent } from './subestcao-lista/subestcao-lista.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SubestacaoFormComponent,
    SubestcaoListaComponent
  ],
  imports: [
    CommonModule,
    SubestacaoRoutingModule,
    FormsModule,
    RouterModule,
    GoogleMapsModule
   

  ], exports: [
    SubestacaoFormComponent,
    SubestcaoListaComponent,
  ]
})
export class SubestacaoModule { }
