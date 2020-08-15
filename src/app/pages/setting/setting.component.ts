import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/categories.service';
import { CountryService } from 'src/app/country.service';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  editUser:FormGroup;
  countries;
  userInfo;
  constructor(private countryService:CountryService,private userService:UserService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.editUser = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.email,Validators.required]),
      country_id: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
    })
    this.getCountries()
  }

  getCountries(){
    this.countryService.getCountries().subscribe(
      (result)=>{
        console.log(result);
        this.countries = result
      }
    )
  }
  getUserInfo(){
    this.userService.getUserInfo().subscribe(
      (result)=>{
        console.log(result)
        this.userInfo= result
        this.editUser.patchValue({
          name:this.userInfo.name,
          email:this.userInfo.email,
          country_id: +this.userInfo.country_id,
          phone:this.userInfo.phone

        })
        console.log(this.editUser)
      }
    )
  }

  onSubmit(){
    this.userService.editUser(this.editUser.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success(`Your Information Edit Successfully `, 'success');
      },
      (error)=>{
        console.log(error)
        let errors = error.error.error;
        Object.keys(errors).forEach((key,index) => {
          if(errors[key] == "The email has already been taken."){
            
            this.toastrService.error('The email has already been taken.', 'error')
          }
          if(errors[key] == "The phone has already been taken."){
   
            this.toastrService.error('The phone has already been taken.', 'error')
          }

          
        });
      }
    )
    console.log(this.editUser)
  }

}
