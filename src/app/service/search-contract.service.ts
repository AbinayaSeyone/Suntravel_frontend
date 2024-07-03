import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomTypeCondition } from '../model/room-type-condition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchContractService {
  private baseUrl='http://localhost:8080'
  constructor(private http: HttpClient) { }

  // Method to search contracts based on the provided data
  searchContracts(checkInDate: string, numberOfNights: number, conditions: RoomTypeCondition[]): Observable<any> {
    const queryParams = `?checkInDate=${checkInDate}&numberOfNights=${numberOfNights}`;
    return this.http.post<any>(`${this.baseUrl}/contractedRoomTypes/filterAndGroup` + queryParams, conditions);
  }
}

// search-contract.service.ts




