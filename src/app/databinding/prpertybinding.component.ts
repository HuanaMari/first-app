import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-prpertybinding',
  templateUrl: './prpertybinding.component.html',
  styleUrls: ['./prpertybinding.component.css']
})
export class PrpertybindingComponent implements OnInit {
@Input() result : number = 0; 
  constructor() { }

  ngOnInit(): void {
  }

}
