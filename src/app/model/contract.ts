import { ContractedRoomType } from "./contracted-room-type";
import { Hotel } from "./hotel.model";

export class Contract {
    contractId?: number;  
    startDate!: Date;
    endDate!: Date;
    hotel!:Hotel;
    markUpRate!:number; 
    contractedRoomTypeList: ContractedRoomType[]=[];
}
