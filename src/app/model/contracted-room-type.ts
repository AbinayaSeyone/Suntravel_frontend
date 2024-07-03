import { Contract } from "./contract";
import { RoomType } from "./room-type";

export class ContractedRoomType {
    contractedRoomTypeId!: number;  
    price!: number;
    maxAdults!: number;
    noOfRooms!:number;
    contract !:Contract;
    roomType :RoomType=new RoomType('');
    
}
