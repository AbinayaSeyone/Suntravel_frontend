import { Component } from '@angular/core';
import { RoomType } from '../../../model/room-type';
import { Hotel } from '../../../model/hotel.model';
import { RoomTypeService } from '../../../service/room-type.service';
import { HotelService } from '../../../service/hotel.service';
import { Router } from '@angular/router';
import * as swal from 'sweetalert2';

@Component({
  selector: 'app-room-type-add',
  templateUrl: './room-type-add.component.html',
  styleUrl: './room-type-add.component.css'
})
export class RoomTypeAddComponent {
 
  
  newRoomType: RoomType = new RoomType(''); // Initialize with default values
  availableHotels: Hotel[] = [];
 
  constructor(private roomTypeService: RoomTypeService,private hotelService:HotelService,private router: Router) {}

  ngOnInit(): void {
    // Fetch available hotels from the service
    this.hotelService.getHotels().subscribe((hotels) => {
      this.availableHotels = hotels;
    });
  }

  addRoomType(): void {

    if (!this.newRoomType.roomTypeName.trim()) {
      swal.default.fire("No Inormation",'Room Type name is required','error');
      console.error('Room Type is required.');
      return; // Exit early if either hotelName or hotelLocation is empty
    }

    if (!this.newRoomType.hotel || !this.newRoomType.hotel.hotelId) {
      swal.default.fire('No Information', 'Hotel is required', 'error');
      console.error('Hotel is required.');
      return;
    }
    

    //this.newRoomType.hotel.hotelId = this.selectedHotel.hotelId;
    console.log(this.newRoomType);
    this.roomTypeService.addRoomTypes(this.newRoomType).subscribe(
      (data) => {
        swal.default.fire("Success",'Room Type added successfully','success');
        console.log('Room Type added successfully:', data);
        this.router.navigate(['/roomtype']); // Navigate back to the hotel list after adding a new hotel.
      },
      (error) => {
        console.error('Error adding hotel:', error);
      }
    );
  }

}
