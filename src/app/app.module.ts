import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { SubestacaoModule } from './subestacao/subestacao.module'
import { SubestacaoService } from './subestacao.service'
import { RedeMtModule } from './rede-mt/rede-mt.module'
import { RedeMtService } from './rede-mt.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    SubestacaoModule,
    RedeMtModule,
    GoogleMapsModule
    
  ],
  providers: [
    SubestacaoService,
    RedeMtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
