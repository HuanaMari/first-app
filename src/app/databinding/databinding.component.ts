import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation: string = "test";
  numberInterpolation: number = 3;

  onTest(){
    return true
  }
  onClicked(value: string) {
alert(value);
  }
  constructor() {}

  ngOnInit(): void {}

}
