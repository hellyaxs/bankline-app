import { Component, OnInit } from '@angular/core';
import { CorretistaService } from 'src/app/services/corretista.service';

@Component({
  selector: 'app-correntistas',
  templateUrl: './correntistas.component.html',
  styleUrls: ['./correntistas.component.css']
})
export class CorrentistasComponent implements OnInit {
  correntistas:any;
  CPF:any;
  nome:any;
  constructor(
    private correntistaService: CorretistaService,
    ) { }
  ngOnInit(): void {
    this.exibirCorrentistas();
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
  save(): void {
    const correntista = {
      cpf:this.CPF,
      nome:this.nome
    };
    console.log(correntista);
    this.correntistaService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
          this.exibirCorrentistas();
        },
        error => {
          console.log(error);
        });
  }

}
