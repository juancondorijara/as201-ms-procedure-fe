import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PersonPageComponent } from './pages/person-page/person-page.component';
import { ProcedurePageComponent } from './pages/procedure-page/procedure-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: 'student',
        component: StudentPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: 'person',
        component: PersonPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: 'career',
        component: CareerPageComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: 'procedure',
        component: ProcedurePageComponent,
        canActivate: [ AuthGuard ],
      }
    ],
    canActivate: [ AuthGuard ],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
