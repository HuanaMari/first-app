import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpertybindingComponent } from './prpertybinding.component';

describe('PrpertybindingComponent', () => {
  let component: PrpertybindingComponent;
  let fixture: ComponentFixture<PrpertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrpertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
