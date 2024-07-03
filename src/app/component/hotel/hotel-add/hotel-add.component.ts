import { Component } from '@angular/core';
import { Hotel } from '../../../model/hotel.model';
import { HotelService } from '../../../service/hotel.service';
import { Router } from '@angular/router';
import * as swal from 'sweetalert2';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css'] // Use styleUrls instead of styleUrl
})
export class HotelAddComponent {
  newHotel: Hotel = new Hotel('', ''); // Initialize with empty strings

  constructor(private hotelService: HotelService, private router: Router) {}

  addHotel(): void {
    // Check if hotelName and hotelLocation are provided
    if (!this.newHotel.hotelName.trim() || !this.newHotel.hotelLocation.trim()) {
      swal.default.fire("Incorrect",'Hotel name and location are required','error');
      console.error('Hotel name and location are required.');
      return; // Exit early if either hotelName or hotelLocation is empty
    }

    // Both hotelName and hotelLocation are provided, proceed with adding the hotel
    this.hotelService.addHotel(this.newHotel).subscribe(
      (data) => {
        swal.default.fire("Success",'Hotel added successfully','success');
        console.log('Hotel added successfully:', data);
        this.router.navigate(['/hotel']); // Navigate back to the hotel list after adding a new hotel.
      },
      (error) => {
        console.error('Error adding hotel:', error);
      }
    );
  }
}
