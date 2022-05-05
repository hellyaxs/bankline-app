import { Component, OnInit } from '@angular/core';
import { CorretistaService } from 'src/app/services/corretista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
  correntistas:any;
  correntista:any;
  valor:any;
  descricao:any;
  tipo:any;
  dataHora:any;

  constructor(private corretistaService:CorretistaService,
              private movimentacaoService:MovimentacaoService ) { }

              ngOnInit(): void {
                this.exibirCorrentistas();
              }

              exibirCorrentistas(): void {
                this.corretistaService.list()
                  .subscribe(
                    data => {
                      this.correntistas = data;
                      console.log(data);
                    },
                    error => {
                      console.log(error);
                    });
              }

              save(): void {
                console.log(this.correntista)
                const movimentacao = {
                  valor:this.valor,
                  descricao:this.descricao,
                  tipo:this.tipo,
                  idConta:this.correntista.id,
                  dataHora:this.dataHora
            
                };
                console.log(movimentacao);
                this.movimentacaoService.create(movimentacao)
                  .subscribe(
                    response => {
                      console.log(response);
                    },
                    error => {
                      console.log(error);
                    });
              }


}
