import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActiveComponent } from './most-active.component';

describe('MostActiveComponent', () => {
  let component: MostActiveComponent;
  let fixture: ComponentFixture<MostActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
