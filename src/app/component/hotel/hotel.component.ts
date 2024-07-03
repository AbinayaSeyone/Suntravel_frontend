import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { Hotel } from '../../model/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {
  hotels: any[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(
      (data) => {
        this.hotels = data;
        console.log('Data from backend:', data);
      },
      (error) => {
        console.error('Error fetching data from backend:', error);
      }
    );
  }

  
}