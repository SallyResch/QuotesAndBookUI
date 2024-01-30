import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService){

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send object to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(response)=>{
          alert(response.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
}}
