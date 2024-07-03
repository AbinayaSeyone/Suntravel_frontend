import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from '../model/contract';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl='http://localhost:8080'

  constructor(private http:HttpClient) { }

  getContracts():Observable<Contract[]>{
    return this.http.get<Contract[]>(`${this.baseUrl}/contracts`)
  }
  addContract(newContract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.baseUrl}/contractsAdd`, newContract);
  }

}
