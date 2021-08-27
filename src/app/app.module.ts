import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { InicialComponent } from './componentes/inicial/inicial.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ProdutoComponent,
    CarrinhoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
