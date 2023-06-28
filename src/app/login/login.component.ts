import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  redirec() {
   this.router.navigate(['/movimentacoes']);
  throw new Error('Method not implemented.');
  }

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

}
