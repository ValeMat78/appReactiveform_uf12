import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //secondo passo: dichiarare un oggetto di tipo FomrGroup
  singup: FormGroup;

  ngOnInit(){
    //terzo passo: inizializzare l'oggetto Formgroup
    this.singup = new FormGroup({
      nominativo: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('')
    })
  }
  
  onSubmit(){
    console.log(this.singup);
  }
}
