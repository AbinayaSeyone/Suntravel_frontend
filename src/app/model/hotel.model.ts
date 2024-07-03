export class Hotel {
  hotelId?: number;
  hotelName: string;
  hotelLocation: string;
  imageUrl!:string;

    constructor(
         hotelName: string,
         hotelLocation: string
      ) {


        
      this.hotelName=hotelName;
      this.hotelLocation=hotelLocation;
      }
}
