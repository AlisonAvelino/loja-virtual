import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }

  finalizarCompra(){

  }

  removerCarrinho(id: number){
    this.carrinhoService.remover(id);
  }

  get itens(){
    return this.carrinhoService.itens;
  }

  get total(){
    return this.carrinhoService.total;
  }

}
