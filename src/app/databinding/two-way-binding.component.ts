import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
template : `
<p>two-way-binding works!</p> 
<input type="text" [(ngModel)]="person.name">
<input type="text" [(ngModel)]="person.name">
<h3>{{person.name}}</h3> 
`,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  person={
    name: 'Marija',
    age: 31
  };

  
  constructor() {
    console.log(this.person)
   }

  ngOnInit(): void {
  }

}
