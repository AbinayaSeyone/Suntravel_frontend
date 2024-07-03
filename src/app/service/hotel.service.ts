import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl='http://localhost:8080'

  constructor(private http:HttpClient) { }

  getHotels():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/hotels`)
  }

  addHotel(newHotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.baseUrl}/hotelAdd`, newHotel);
  }
  findById(hotelId:number):Observable<Hotel>{
    return this.http.get<Hotel>(`${this.baseUrl}/hotels/${hotelId}`)
  }

}
