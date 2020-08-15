import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from 'src/app/advertising.service';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  advertisings
  constructor(private advertisingService:AdvertisingService) { }

  ngOnInit(): void {
    this.getAdvertisings()
  }

  getAdvertisings(){
    this.advertisingService.getAdvertising().subscribe(
      (result)=>{
        console.log(result);
        this.advertisings = result
      }
    )
  }

}
