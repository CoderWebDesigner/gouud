import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories;
  firstCategory;
  cart;
  constructor(private translate: TranslateService,private categoriesService:CategoriesService) {
    // translate.addLangs(['en','ar'])
    // translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang()
    // translate.use(browserLang.match(/en|ar/)? browserLang:'en')

  }
  ngOnInit(){
    this.getCategories()
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      (result)=>{
        this.categories = result
        this.firstCategory = this.categories[0].id;
        
      }
    )
  }
 
 
}
