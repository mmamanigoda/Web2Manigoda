import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CijenovnikComponent } from './cijenovnik/cijenovnik.component';


const routes: Routes = [
  
    { 
      path: 'Registration', 
      component: RegisterComponent 
    }
,
    { 
      path: 'Login', 
      component: LoginComponent
    }
   ,
    { 
      path: 'Cijenekarata', 
      component: CijenovnikComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  