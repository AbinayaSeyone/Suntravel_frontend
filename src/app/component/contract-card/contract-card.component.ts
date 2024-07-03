import { Component, Input } from '@angular/core';
import { Contract } from '../../model/contract';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrl: './contract-card.component.css'
})
export class ContractCardComponent {
  @Input() contract: Contract ={} as Contract;
  

  imagePaths: string[] = [
    'https://www.rbcrca.com.sg/wp-content/uploads/2016/07/a-guide-to-hiring-employees-in-singapore-.jpg',
    'https://kohoconsulting.com/wp-content/uploads/2019/07/image-contract-management-ebook-6-steps-copy.png',
  
];

getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.imagePaths.length);
    return this.imagePaths[randomIndex];
}

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}


