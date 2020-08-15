import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliders
  constructor(private sliderService:SliderService) { }

  ngOnInit(): void {
    this.getSliders()
  }
  getSliders(){
    this.sliderService.getSlider().subscribe(
      (result)=>{
        console.log(result)
        this.sliders = result
      }
    )
  }

}
