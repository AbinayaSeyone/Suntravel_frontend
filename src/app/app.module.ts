import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelCardComponent } from './component/hotel-card/hotel-card.component';
import { HotelAddComponent } from './component/hotel/hotel-add/hotel-add.component';
import { RoomTypeComponent } from './component/room-type/room-type.component';
import { RoomTypeCardComponent } from './component/room-type-card/room-type-card.component';
import { RoomTypeAddComponent } from './component/room-type/room-type-add/room-type-add.component';
import { ContractComponent } from './component/contract/contract.component';
import { ContractAddComponent } from './component/contract/contract-add/contract-add.component';
import { ContractCardComponent } from './component/contract-card/contract-card.component';
import { SearchContractComponent } from './component/search-contract/search-contract.component';
import { AvailableHotelsComponent } from './component/available-hotels/available-hotels.component';
import { AvailableHotelsCardComponent } from './component/available-hotels-card/available-hotels-card.component';
import { ContractAdd2Component } from './component/contract/contract-add2/contract-add2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HotelComponent,
    HotelCardComponent,
    HotelAddComponent,
    RoomTypeComponent,
    RoomTypeCardComponent,
    RoomTypeAddComponent,
    ContractComponent,
    ContractAddComponent,
    ContractCardComponent,
    SearchContractComponent,
    AvailableHotelsComponent,
    AvailableHotelsCardComponent,
    ContractAdd2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
