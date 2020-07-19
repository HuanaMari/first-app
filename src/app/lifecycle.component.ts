import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
  <hr>
  <h1>LifeCycle</h1>
    <ng-content></ng-content>
    <hr>
    <p #bindingParagraph>{{bindable}} </p>
    <p>{{bindingParagraph.textContent}} </p>

  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy, OnInit {

  @ViewChild('bindingParagraph') bindingParagraph : HTMLElement;
  @ContentChild('boundContent') boundContent : HTMLElement;
  @Input() bindable = 1000;
  constructor() {}
  ngOnChanges() {
    this.log('OnChanges')
  }
  ngDoCheck() {
    this.log('DoCheck')
  }
  ngAfterContentInit() {
    this.log('AfterContentInit')
    console.log(this.boundContent)
  }
  ngAfterContentChecked() {
    this.log('AfterContentChecked')
  }
  ngAfterViewInit() {
    this.log('AfterViewInit')
    // console.log(this.bindingParagraph)
  }
  ngAfterViewChecked() {
    this.log('AfterViewChecked')
  }
  ngOnDestroy() {
    this.log('OnDestroy')
  }
  ngOnInit(): void {}

  private log(hook: string) {
    console.log(hook)
  }

}
