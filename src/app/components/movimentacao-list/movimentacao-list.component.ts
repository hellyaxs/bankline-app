import { Component, OnInit } from '@angular/core';
import { CorretistaService } from 'src/app/services/corretista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

 
  movimentacoes:any;
  correntistas:any;
  correntista:any={};

  constructor(private movimentacaoServide: MovimentacaoService,
              private correntistaService: CorretistaService
    
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();

  }

  listeTeste():void{
    this.movimentacaoServide.list()
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  listMovimentacoes(): void {
    this.movimentacaoServide.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
