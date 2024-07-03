// contract-add.component.ts

import { Component } from '@angular/core';
import { Contract } from '../../../model/contract';
import { Hotel } from '../../../model/hotel.model';
import { RoomType } from '../../../model/room-type';
import { ContractService } from '../../../service/contract.service';
import { HotelService } from '../../../service/hotel.service';
import { RoomTypeService } from '../../../service/room-type.service';
import { ContractedRoomType } from '../../../model/contracted-room-type';
import * as swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent {
  newContract: Contract = new Contract();
  availableHotels: Hotel[] = [];
  availableRoomTypes: RoomType[] = [];
  availableSelectedRoomTypes: RoomType[] = [];
  selectedRoomTypeId = this.newContract.contractedRoomTypeList
    .map(contractRoomType => contractRoomType.roomType.roomTypeId);
  //newContractedRoomType:ContractedRoomType=new ContractedRoomType();


  constructor(
    private contractService: ContractService,
    private hotelService: HotelService,
    private roomTypeService: RoomTypeService,
    private router: Router
  ) {



  }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      this.availableHotels = hotels;
    });
    //this.availableSelectedRoomTypes=this.filterRoomTypesByHotel();
    // this.roomTypeService.getRoomTypes().subscribe(roomTypes => {
    //   // Check if newContract properties are not null/undefined
    //   if (this.newContract.hotel.hotelId) {
    //     if (this.newContract.contractedRoomTypeList) {
    //       const selectedRoomTypeIds = this.newContract.contractedRoomTypeList.map(contractRoomType => contractRoomType.roomType.roomTypeId);
    //       // Filter room types based on criteria
    //       this.availableRoomTypes = roomTypes.filter(roomType => {
    //         return roomType.hotel.hotelId === this.newContract.hotel.hotelId &&
    //           !selectedRoomTypeIds.some(selectedRoomType => selectedRoomType === roomType.roomTypeId);
    //       });
    //     } else {
    //       this.availableRoomTypes = roomTypes.filter(roomType => {
    //         return roomType.hotel.hotelId === this.newContract.hotel.hotelId
    //       });
    //     }
    //   } else {
    //     // Handle case when newContract properties are not selected yet
    //     // For example, you could choose to display all room types or handle this case differently
    //     this.availableRoomTypes = roomTypes;
    //   }
    // });
    // this.roomTypeService.getRoomTypes().subscribe(roomTypes=>{
    //   this.availableRoomTypes=roomTypes.filter(roomType=>{
    //     return roomType.hotel.hotelId===this.newContract.hotel.hotelId;
    //   }
  
    //   )
    // })

    this.roomTypeService.getRoomTypes().subscribe(roomTypes => {
      if ( this.newContract.hotel?.hotelId) {
        if (this.newContract.contractedRoomTypeList && this.newContract.contractedRoomTypeList.length > 0) {
          const selectedRoomTypeIds = this.newContract.contractedRoomTypeList.map(contractRoomType => contractRoomType.roomType.roomTypeId);
          // Filter room types based on criteria
          this.availableRoomTypes = roomTypes.filter(roomType => {
            return roomType.hotel?.hotelId === this.newContract.hotel.hotelId &&
              !selectedRoomTypeIds.includes(roomType.roomTypeId);
          });
        } else {
          // If no room types are selected, show all room types for the selected hotel
          this.availableRoomTypes = roomTypes.filter(roomType => {
            return roomType.hotel.hotelId === this.newContract.hotel?.hotelId;
          });
        }
      } else {
        // Handle case when newContract or hotel is not selected yet
        // For example, you could choose to display all room types or handle this case differently
        this.availableRoomTypes = roomTypes;
      }
    });
    

  }




  filterRoomTypesByHotel(index:number): RoomType[] {
    if (!this.newContract.hotel.hotelId) {
      return this.availableRoomTypes;
    }
    const selectedRoomTypeIds = this.newContract.contractedRoomTypeList
      .map(contractRoomType => contractRoomType.roomType.roomTypeId);

    return this.availableRoomTypes.filter(type => {
      return type.hotel.hotelId === this.newContract.hotel.hotelId &&
        !selectedRoomTypeIds.includes(type.roomTypeId);
    });
    //return this.availableRoomTypes.filter(type => type.hotel.hotelId === this.newContract.hotel.hotelId);
  }

  addContract(): void {

    const startDate = new Date(this.newContract.startDate);
    const endDate = new Date(this.newContract.endDate);

    if (this.newContract.startDate <= (new Date)) {
      swal.default.fire('Invalid Start Date', 'Start date is not valid', 'error');
      return;
    }

    if (this.newContract.endDate <= this.newContract.startDate) {
      swal.default.fire('Invalid End Date', 'End date must be greater than the start date', 'error');
      return;
    }

    if (this.newContract.markUpRate < 1) {
      swal.default.fire('Invalid Margin Rate', 'Markup rate shold not be in negative', 'error');
      return;
    }


    if (!this.newContract.hotel || !this.newContract.hotel.hotelId) {
      swal.default.fire('No Information', 'Hotel is required', 'error');
      console.error('Hotel is required.');
      return;
    }


    if (this.newContract.contractedRoomTypeList.length === 0) {
      swal.default.fire('No Room Types', 'At least one room type must be added', 'error');
      return;
    }

    for (const roomType of this.newContract.contractedRoomTypeList) {
      if (roomType.price < 0 || roomType.maxAdults < 1 || roomType.maxAdults > 20 || roomType.noOfRooms < 1 || roomType.noOfRooms > 20) {
        swal.default.fire('Invalid Room Type', 'Room type details are not valid', 'error');
        return;
      }
    }


    this.contractService.addContract(this.newContract).subscribe(
      (data) => {
        swal.default.fire("Success", 'Contract added successfully', 'success');
        console.log('Contract added successfully:', data);
        this.router.navigate(['/contract']); 
        // Handle success, e.g., navigate to the contract details page
      },
      (error) => {
        console.error('Error adding contract:', error);
        // Handle error, e.g., display an error message
      }
    );
  }

  addAnotherRoomType(): void {
    this.newContract.contractedRoomTypeList.push(new ContractedRoomType());
  }
}
