import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractedRoomType } from '../../model/contracted-room-type';
import { Contract } from '../../model/contract';
import { RoomTypeCondition } from '../../model/room-type-condition';

@Component({
  selector: 'app-available-hotels-card',
  templateUrl: './available-hotels-card.component.html',
  styleUrl: './available-hotels-card.component.css'
})
export class AvailableHotelsCardComponent {
  @Input() contractedRoomTypes: ContractedRoomType[] = [];
  @Input() contract: Contract ={} as Contract;
  @Input()  conditions:RoomTypeCondition[]=[];
  @Input()  noOfNights!:number;
  
  calculatedPrice:number=0;

  // showPrice():any{
  // this.conditions.forEach(condition => {
  //   this.contract.contractedRoomTypeList.forEach(contractedRoomType => {
  //     if(contractedRoomType.roomType.roomTypeName===condition.roomTypeName){
  //         this.calculatedPrice=contractedRoomType.price*condition.noOfRooms*this.contract.markUpRate*this.noOfNights;
  //     }


  //   });

  //     // condition.calculatedPrice=this.calculatedPrice;
  //     console.log(this.calculatedPrice);
      
  //    });

  // }

  showPrice(): number {
     this.calculatedPrice = 0; // Reset calculatedPrice before re-calculation
    this.conditions.forEach(condition => {
      this.contract.contractedRoomTypeList.forEach(contractedRoomType => {
        if (contractedRoomType.roomType.roomTypeName === condition.roomTypeName) {
          this.calculatedPrice += contractedRoomType.price * condition.noOfRooms *((this.contract.markUpRate + 100)/100 )* this.noOfNights*condition.noOfAdults;
        }
      });
    });
    console.log('Calculated Price:', this.calculatedPrice);
    return this.calculatedPrice;
  }

  showPriceMax(): number {
    this.calculatedPrice = 0; // Reset calculatedPrice before re-calculation
    let calculatedPriceEachCondition=0;
    let maxPrice=0;
   this.conditions.forEach(condition => {
     this.contract.contractedRoomTypeList.forEach(contractedRoomType => {
       if (contractedRoomType.roomType.roomTypeName === condition.roomTypeName) {
          calculatedPriceEachCondition=contractedRoomType.price * condition.noOfRooms *((this.contract.markUpRate + 100)/100 )* this.noOfNights*condition.noOfAdults;
         this.calculatedPrice += contractedRoomType.price * condition.noOfRooms *((this.contract.markUpRate + 100)/100 )* this.noOfNights*condition.noOfAdults;
       }
       if(maxPrice<calculatedPriceEachCondition){
        maxPrice=calculatedPriceEachCondition
       }
     });
   });
   console.log('Calculated Price:', this.calculatedPrice);
   //return this.calculatedPrice;
   return maxPrice;
 }

  showConditions: boolean = false;
 
  toggleConditions(): void {
    this.showConditions = !this.showConditions;
  }
  
  getPriceForCondition(condition: any): number {
    let priceForCondition = 0;
   ;
    this.contract.contractedRoomTypeList.forEach(contractedRoomType => {
      if (contractedRoomType.roomType.roomTypeName === condition.roomTypeName) {
        priceForCondition = contractedRoomType.price * condition.noOfRooms * ((this.contract.markUpRate+100)/100) * this.noOfNights*condition.noOfAdults;
      }
    });
    return priceForCondition;
  }
  

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}

