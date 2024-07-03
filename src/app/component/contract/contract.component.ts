import { Component } from '@angular/core';
import { Contract } from '../../model/contract';
import { ContractService } from '../../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css'
})
export class ContractComponent {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getContracts().subscribe((contracts) => {
      this.contracts = contracts;
    });
  }

}
