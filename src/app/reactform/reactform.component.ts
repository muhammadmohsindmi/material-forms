import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Relegion{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})

export class ReactformComponent implements OnInit {

  indeterminate = false;
 
 
  title = "Reactive Form";
  relegion: Relegion[] = [
    {'value':'hindu', 'viewValue':'Hindu'},
    {'value':'muslim', 'viewValue':'Muslim'},
    {'value':'sikh', 'viewValue':'Sikh'},
    {'value':'christian', 'viewValue':'Christian'}
  ];

  userDetail = {
  firstName:"Mohsin",
  lastName:"Gaur",
  gender: "male",
  rel: "muslim"
  }

  userForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required]),
    gender: new FormControl('',[Validators.required]),
    rel: new FormControl('',[Validators.required]),
    checked: new FormControl('',[Validators.requiredTrue]),
  });
  
  saveData(){
    if(this.userForm.valid){
      if(this.userForm.get('checked')?.touched){
        console.log("User Information ",this.userForm.value);
      }
      
    } else{
      console.log("Some fields missing.");
    }
  }

  constructor() { 
    this.userForm.patchValue(this.userDetail);    
  }

  ngOnInit(): void {
  }

}
