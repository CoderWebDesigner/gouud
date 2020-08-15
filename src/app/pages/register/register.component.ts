import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { CountryService } from 'src/app/country.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countries = [];
  visiblePassword: boolean = false;
  visibleConfirm: boolean = false;
  isEmailValid:boolean = true;
  ispasswordMatched:boolean =true;
  isPhoneValid:boolean=true;
  @ViewChild('ShowHidePassword', { static: true }) password: ElementRef;
  @ViewChild('ShowHideConfirm', { static: true }) confirm: ElementRef;

  constructor(
    private authService: AuthService,
    private countriesService: CountryService,
    private cookiesService: CookieService,
    private router: Router,
    private toastrService:ToastrService,
    private renderer2:Renderer2) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      country_id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      c_password: new FormControl(null, [Validators.required])
    })

    this.countriesService.getCountries().subscribe(
      (result) => {
        // console.log(result);

        this.countries = result
      },
      (error) => { // console.log(error) 
      }
    )
  }
  togglePassword() {

    this.visiblePassword = !this.visiblePassword;
    if (this.visiblePassword) {
      this.renderer2.setAttribute(this.password.nativeElement,'type','text')
      // this.confirm.nativeElement.setAttribute('type', 'text')
    } else {
      this.renderer2.setAttribute(this.password.nativeElement,'type','password')
      // this.confirm.nativeElement.setAttribute('type', 'password');
    }
  }
  toggleConfirm() {

    this.visibleConfirm = !this.visibleConfirm;
    if (this.visibleConfirm) {
      this.renderer2.setAttribute(this.confirm.nativeElement,'type','text')
      // this.confirm.nativeElement.setAttribute('type', 'text')
    } else {
      this.renderer2.setAttribute(this.confirm.nativeElement,'type','password')
      // this.confirm.nativeElement.setAttribute('type', 'password');
    }
  }

  onSubmit() {
    // console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success(`${result.info.name} Add Successfully`, 'success')
        // localStorage.setItem('user',JSON.stringify(result.token))
        this.router.navigate(['auth/login'])
        // if (this.cookiesService.get('Token')) {
        // }
      },
      (error) => { 
        console.log(error.error.error)
        let errors = error.error.error;
        Object.keys(errors).forEach((key,index) => {
          if(errors[key] == "The email has already been taken."){
            this.isEmailValid = false;
            this.toastrService.error('The email has already been taken.', 'error')
          }
          if(errors[key] == "The phone has already been taken."){
            this.isPhoneValid =false
            this.toastrService.error('The phone has already been taken.', 'error')
          }

          if(errors[key] == "The c password and password must match."){
            this.ispasswordMatched = false
            this.toastrService.error("The  password and confirm password must match.", 'error')
          }
        });
       
      }

    )
  }

}
