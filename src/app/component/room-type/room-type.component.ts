import { Component, OnInit } from '@angular/core';
import { RoomType } from '../../model/room-type';
import { RoomTypeService } from '../../service/room-type.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrl: './room-type.component.css'
})
export class RoomTypeComponent implements OnInit {
  roomTypes: RoomType[] = [];

  constructor(private roomTypeService: RoomTypeService) {}

  ngOnInit(): void {
    this.getRoomTypes();
  }

  getRoomTypes(): void {
    this.roomTypeService.getRoomTypes().subscribe((roomTypes) => {
      this.roomTypes = roomTypes;
    });
  }
}
