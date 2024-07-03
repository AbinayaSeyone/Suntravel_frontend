import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelAddComponent } from './component/hotel/hotel-add/hotel-add.component';
import { RoomTypeComponent } from './component/room-type/room-type.component';
import { RoomTypeAddComponent } from './component/room-type/room-type-add/room-type-add.component';
import { ContractComponent } from './component/contract/contract.component';
import { ContractAddComponent } from './component/contract/contract-add/contract-add.component';
import { SearchContractComponent } from './component/search-contract/search-contract.component';
import { AvailableHotelsComponent } from './component/available-hotels/available-hotels.component';
import { AvailableHotelsCardComponent } from './component/available-hotels-card/available-hotels-card.component';
import { ContractAdd2Component } from './component/contract/contract-add2/contract-add2.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'hotel',component:HotelComponent},
  {path:'hotelAdd',component:HotelAddComponent},
  {path:'roomtype',component:RoomTypeComponent},
  {path:'roomTypeAdd',component:RoomTypeAddComponent},
  {path:'contract',component:ContractComponent},
  {path:'contractAdd',component:ContractAddComponent},
  {path:'contractAdd2',component:ContractAdd2Component},
  {path:'searchContract',component:SearchContractComponent},
  {path:'availableContracts',component:AvailableHotelsComponent},
  {path:'availableContractDetails',component:AvailableHotelsCardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
