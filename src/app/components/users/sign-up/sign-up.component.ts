import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router ){
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      token: ['This is your token'],
      role: ['User']
    })
  }

  onSignUp(){
    if(this.signUpForm.valid){
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next: (response =>{
          alert(response.message);
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err =>{
          alert(err?.error.message)
        })  
      })
      console.log(this.signUpForm.value)
    }
  }
}
