import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['auth/login'])
  }
}
