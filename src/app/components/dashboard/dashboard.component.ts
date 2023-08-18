import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  status: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
  }

  logOut() {
    sessionStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}
