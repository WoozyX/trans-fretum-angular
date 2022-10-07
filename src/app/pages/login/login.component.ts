import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });
    
  }

  get nome(){
    return this.login.get('nome')!;
  }
  get senha(){
    return this.login.get('senha')!;
  }

  

  submit(){
    if(this.login.invalid)
    {
      return;
      
    }
    console.log(this.login.value);
    
  }

}
