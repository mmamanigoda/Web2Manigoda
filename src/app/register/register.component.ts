import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/appUser.model';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ServerService]
})
export class RegisterComponent implements OnInit {

  errors: any[] = [];
  validationMessage: string = "";
  today: Date;
  public frmSignup: FormGroup;
  user: AppUser;

  selectedFile :any;
  localUrl: any[];
  imageShow : any;

  appUser = this.fb.group({
    Name: ["",[Validators.required,Validators.minLength(4)]],
    LastName: ["",[Validators.required,
    Validators.minLength(5)]],
    DateOfBirth:["", [Validators.required]],
    Type:["", [Validators.required]],
    Email:["", [Validators.email, Validators.required]],
    Address: ["",[Validators.required, Validators.minLength(6)]],
    Password:["",[
      Validators.required,
      Validators.minLength(8)
    ]],
    ConfirmPassword:["",[Validators.required]],
    ImageUrl:[""],
  }, );
  constructor(private fb: FormBuilder, private serverService: ServerService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.appUser != null)
    {
      this.user = new AppUser;
      this.user.Name = this.appUser.value.Name;
      this.user.LastName = this.appUser.value.LastName;
      this.user.Email = this.appUser.value.Email;
      this.user.Address = this.appUser.value.Address;
      this.user.Password = this.appUser.value.Password;
      this.user.ConfirmPassword = this.appUser.value.ConfirmPassword;
      this.user.DateOfBirth = this.appUser.value.DateOfBirth;
      this.user.ImageUrl = this.imageShow;
      this.user.Type = this.appUser.value.Type;

      
    }
  }


}
