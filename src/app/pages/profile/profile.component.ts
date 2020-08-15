import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser 
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem('user'))))
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    // console.log(this.currentUser);
  }

}
