import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router} from '@angular/router';
import { LoginUser } from '../models/loginUser.model';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validationMessage: string = "";
  show:boolean;
  constructor( private router: Router,private serverService: ServerService) { }


  ngOnInit() {
    localStorage.clear();
  }


  Login(loginUser : LoginUser, form: NgForm){
    this.serverService.getTheToken(loginUser)
    .subscribe(
      res => {
        let jwt = res.access_token;

        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        
        let role = decodedJwtData.role
        console.log(role);
        localStorage.setItem('jwt',jwt)
        localStorage.setItem('role',role)
        //this.router.navigate(['']);
        this.router.navigate(['']).then(() => window.location.reload()); //OVAKO REFRESUJEM STRANICUUUUUUUU
      },
      err => {
        this.show=true;
        this.validationMessage = err.error.error_description;
        console.log(err);
      }
    )      
} 



}
