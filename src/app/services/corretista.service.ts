import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl ="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CorretistaService {

  constructor(private http:HttpClient) { }

  public list():Observable<any>{
    return this.http.get(`${baseUrl}/correntista`);
  }
  
 create(correntista:any): Observable<any> {
  return this.http.post(`${baseUrl}/correntista`,correntista);
}
}
