import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabrizioComponent } from './fabrizio.component';

describe('FabrizioComponent', () => {
  let component: FabrizioComponent;
  let fixture: ComponentFixture<FabrizioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabrizioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabrizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
