import { Hotel } from "./hotel.model";

export class RoomType {
  roomTypeId!: number;  
  roomTypeName: string='';
  hotel: Hotel=new Hotel('',''); // Representing the Hotel entity

    constructor(roomTypeName: string) {
      this.roomTypeName=roomTypeName;
      this.hotel=this.hotel;
    }
}
