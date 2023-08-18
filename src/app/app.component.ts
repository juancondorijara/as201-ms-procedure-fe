import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isCollapsed = true;

  token: string | null = null;
  status: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  clickEvent() {
    this.status = !this.status;
  }

  logOut() {
    sessionStorage.removeItem("token");
    this.router.navigate(['login']);
  }
}
