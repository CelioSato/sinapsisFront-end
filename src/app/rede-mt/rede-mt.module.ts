import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { RedeMtRoutingModule } from './rede-mt-routing.module';
import { RedeMtFormComponent } from './rede-mt-form/rede-mt-form.component';
import { RedeMtListaComponent } from './rede-mt-lista/rede-mt-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RedeMtFormComponent, 
    RedeMtListaComponent
  ],
  imports: [
    CommonModule,
    RedeMtRoutingModule,
    FormsModule,
    RouterModule
    
  ], exports: [
    RedeMtFormComponent, 
    RedeMtListaComponent
  ]
})
export class RedeMtModule { }
