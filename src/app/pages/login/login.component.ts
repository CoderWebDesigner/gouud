import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visiblePassword: boolean = false;
  loginForm: FormGroup;
  currentUser;
  @ViewChild('ShowHideInput', { static: true }) input: ElementRef;
  constructor(private authService: AuthService, private cookieService:CookieService,private router:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }
  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
    if (this.visiblePassword) {
      this.input.nativeElement.setAttribute('type', 'text')
    } else {
      this.input.nativeElement.setAttribute('type', 'password');
    }
  }
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        // console.log(result);
        localStorage.setItem('user',JSON.stringify(result.info))
        localStorage.setItem('token',result.token)
        this.toastrService.success(`Welcome, ${result.info.name} `, 'success')
        
        if (localStorage.getItem('token')) {
          this.router.navigate(['/'])
        }
        
       },
      (error) => { // console.log(error)
        console.log(error);
        this.toastrService.error(` email or password is incorrect`)
      }
    )
  }

}
