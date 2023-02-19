import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {
  stateList = [
    {id: 1, name: 'Uttar Pradesh'},
    {id: 2, name: 'Delhi'},
    {id: 3, name: 'Haryana'},
    {id: 4, name: 'Punjab'}
  ];
  districtList = [
    {id: 1, refid:1, name: 'Saharanpur'},
    {id: 2, refid:1, name: 'Muzaffar Nagar'},
    {id: 3, refid:1, name: 'Meerut'},
    {id: 4, refid:1, name: 'Ghaziabad'},
    {id: 5, refid:2, name: 'Jamia Nagar'},
    {id: 6, refid:2, name: 'Okhla'},
    {id: 7, refid:3, name: 'Gurgaon'},
    {id: 8, refid:3, name: 'Jhajhar'},
    {id: 9, refid:4, name: 'Jalandhar'},
    {id: 10, refid:4, name: 'Chandigarh'},
  ];
  result:any;
  constructor( private _fb: FormBuilder) { }
  currentObj:any = "";
  districts: any = [];
  selectedValue: any;

  userForm = this._fb.group({
    firstName: ['mohsin', [Validators.required]],
    lastName: ['gaur', [Validators.required]],
    gender: ['male',[]],
    checked: [],
    userAddress: this._fb.group({
      address1: [null, []],
      address2: [null, []],
      state: [],
      dist: []
    })
  });

  ngOnInit(): void {
  }

  filterDist(ref:any){
    this.districts = this.districtList.filter(e => e.refid == ref );
    this.selectedValue = this.districts[0].id;
  }

  clearForm(){
    this.userForm.reset();
  }

  saveData(){
    this.result = this.userForm.getRawValue();
    console.log(this.result);
  }

}
