import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomType } from '../model/room-type';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getRoomTypes(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>(`${this.baseUrl}/roomTypes`)
  }

  addRoomTypes(newRoomType: RoomType): Observable<RoomType> {
    return this.http.post<RoomType>(`${this.baseUrl}/roomTypeAdd`, newRoomType);
  }
  getRoomTypesByHotel(hotelId: number) {
    return this.http.get<RoomType[]>(`${this.baseUrl}/roomTypesByHotel/${hotelId}`)
    throw new Error('Method not implemented.');
  }

 

}
