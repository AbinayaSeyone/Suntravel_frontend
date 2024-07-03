import { Component } from '@angular/core';
import { SearchContractService } from '../../service/search-contract.service';
import { Router } from '@angular/router';
import { RoomTypeCondition } from '../../model/room-type-condition';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrl: './search-contract.component.css'
})
export class SearchContractComponent {
  checkInDate: string = '';
  noOfNights: number = 1;
  conditions: RoomTypeCondition[] = [];

  constructor(private searchContractService:SearchContractService, private router: Router) {}

  addCondition(): void {
    // Add a new condition using the RoomTypeCondition model
    this.conditions.push(new RoomTypeCondition());
  }

  searchContract(): void {
    // Implement searchContract logic here
    const searchData = {
      checkInDate: this.checkInDate,
      noOfNights: this.noOfNights,
      conditions: this.conditions
    };
    
    // Call the searchContracts method from the service and handle the response
    this.searchContractService.searchContracts(searchData.checkInDate, searchData.noOfNights, searchData.conditions)
      .subscribe(
        (contracts) => {
          console.log('Contracts found:', contracts);
          this.router.navigate(['/availableContracts'], { state: { contracts,conditions: this.conditions,noOfNights:this.noOfNights } });
          // Handle the response, e.g., navigate to the contract list page
        },
        (error) => {
          console.error('Error searching contracts:', error);
          // Handle error, e.g., display an error message
        }
      );
  }
}










