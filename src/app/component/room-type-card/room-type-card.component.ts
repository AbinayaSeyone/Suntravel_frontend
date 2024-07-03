import { Component, Input } from '@angular/core';
import { RoomType } from '../../model/room-type';

@Component({
  selector: 'app-room-type-card',
  templateUrl: './room-type-card.component.html',
  styleUrl: './room-type-card.component.css'
})
export class RoomTypeCardComponent {
  @Input()  roomType: RoomType={} as RoomType;
}
