import { Component } from '@angular/core';
import { Contract } from '../../model/contract';
import { Router } from '@angular/router';
import { RoomTypeCondition } from '../../model/room-type-condition';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrl: './available-hotels.component.css'
})
export class AvailableHotelsComponent {

  contracts: Contract[] = [];
  conditions:RoomTypeCondition[]=[];
  noOfNights!:number;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.contracts = navigation.extras.state['contracts'];//changed one
      this. conditions = navigation.extras.state['conditions'];
      this. noOfNights = navigation.extras.state['noOfNights'];

      console.log('Contracts:', this.contracts);
      console.log('Conditions:', this.conditions);
      console.log('No Of nights:',this.noOfNights);
    }
  }

  showPriceMax(): number {
   let maxPrice=0;
    this.contracts.forEach(contract=>{
      let calculatedPrice = 0; // Reset calculatedPrice before re-calculation
      let calculatedPriceEachCondition=0;
      let maxPriceEachContract=0;
      
   this.conditions.forEach(condition => {
     contract.contractedRoomTypeList.forEach(contractedRoomType => {
       if (contractedRoomType.roomType.roomTypeName === condition.roomTypeName) {
          calculatedPriceEachCondition=contractedRoomType.price * condition.noOfRooms *((contract.markUpRate + 100)/100 )* this.noOfNights*condition.noOfAdults;
          calculatedPrice += contractedRoomType.price * condition.noOfRooms *((contract.markUpRate + 100)/100 )* this.noOfNights*condition.noOfAdults;
       }
       if(maxPriceEachContract<calculatedPriceEachCondition){
        maxPriceEachContract=calculatedPriceEachCondition
       }
     });
   });
      if(maxPrice<calculatedPrice){
        maxPrice=calculatedPrice
      }

  });

   //console.log('Calculated Price:', calculatedPrice);
   //return this.calculatedPrice;
   return maxPrice;
 }

  
}

