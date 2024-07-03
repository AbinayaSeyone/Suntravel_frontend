
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Contract} from '../../../model/contract';
import { Hotel } from '../../../model/hotel.model';
import { RoomType } from '../../../model/room-type';
import { ContractService } from '../../../service/contract.service';
import { HotelService } from '../../../service/hotel.service';
import { RoomTypeService } from '../../../service/room-type.service';
import * as swal from 'sweetalert2';
import { ContractedRoomType } from '../../../model/contracted-room-type';

@Component({
  selector: 'app-contract-add2',
  templateUrl: './contract-add2.component.html',
  styleUrl: './contract-add2.component.css'
})
export class ContractAdd2Component implements OnInit{
  contractForm: FormGroup;
  availableHotels: Hotel[] = [];
  availableRoomTypes: RoomType[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private contractService: ContractService,
    private hotelService: HotelService,
    private roomTypeService: RoomTypeService
  ) {
    this.contractForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      markUpRate: ['', Validators.required],
      hotel: ['', Validators.required],
      contractedRoomTypeList: this.formBuilder.array([]) as FormArray
    });

    this.hotelService.getHotels().subscribe(hotels => {
      this.availableHotels = hotels;
    });
  }


  ngOnInit(): void {
    this.contractForm.get('hotelId')?.valueChanges.subscribe((selectedHotelId) => {   //selected hotelId is passd into the selectedHotelId
      this.roomTypeService.getRoomTypesByHotel(selectedHotelId).subscribe((roomTypes: RoomType[]) => {
        this.availableRoomTypes= roomTypes;
      });
    });


  }
  get contractedRoomTypeGroups(): FormArray {
    return this.contractForm.get('contractedRoomTypeList') as FormArray;
  }

  addRoomType(): void {
    const roomTypeGroup = this.formBuilder.group({
      price: ['', Validators.required],
      maxAdults: ['', Validators.required],
      noOfRooms: ['', Validators.required],
      roomType: ['', Validators.required]
    });
    this.contractedRoomTypeGroups.push(roomTypeGroup);
  }

  onHotelChange(hotelId: number): void {
    if(hotelId===null){
      console.log("error");
    }
    // Fetch room types based on the selected hotel
    this.roomTypeService.getRoomTypesByHotel(hotelId).subscribe(roomTypes => {
      this.availableRoomTypes = roomTypes;
    });
  }

  addContract(): void {
    // Create a Contract object from the form values
    const newContract: Contract = {
      startDate: this.contractForm.value.startDate,
      endDate: this.contractForm.value.endDate,
      markUpRate: this.contractForm.value.markUpRate,
      hotel: this.contractForm.value.hotel,
      contractedRoomTypeList: this.contractForm.value.contractedRoomTypeList.map((roomType: ContractedRoomType) => {
        return {
          price: roomType.price,
          maxAdults: roomType.maxAdults,
          noOfRooms: roomType.noOfRooms,
          roomType: roomType.roomType
        };
      })
    };

    // Call the service to add the contract
    this.contractService.addContract(newContract).subscribe(
      (data) => {
        swal.default.fire('Success', 'Contract added successfully', 'success');
        console.log(data);
        // Reset the form after successful submission
        this.contractForm.reset();
      },
      (error) => {
        console.error('Error adding contract:', error);
        swal.default.fire('Error', 'Failed to add contract', 'error');
      }
    );
  }
}






