import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(value: any) {
    let {user, password} = value;
    this.authService.login(
      user, password
    ).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.error('Ha habido un error al hacer login: ', error);
      },
      () => {
        console.info('Petición de login terminado');
      }
    );
  }
}
