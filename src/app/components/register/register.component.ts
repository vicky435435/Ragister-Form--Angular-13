import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

repeatPass: string = 'none';

  ngOnInit(): void {
    
  }

  registerForm = new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.maxLength(6),Validators.minLength(15)]),
    repassword: new FormControl("")
  });

  // registerSubmited() {
  //   console.log(this.registerForm);
  // }

  registerSubmited(){
    if(this.Password.value == this.Repassword.value) {
      console.log(this.registerForm.valid);
      this.repeatPass = 'none'
    }else {
      this.repeatPass = 'inline'
    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }

  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }

  get Gender(): FormControl{
    return this.registerForm.get("gender") as FormControl;
  }

  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }

  get Repassword(): FormControl{
    return this.registerForm.get("repassword") as FormControl;
  }


 


}
