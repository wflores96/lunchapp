import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToLunches() {
    // save the username
    if (this.userName === "") {
      alert ("Please enter a user name!")
    } else {
      localStorage.setItem('name',this.userName);
      this.router.navigate(['lunches']);
    }
  }

}
