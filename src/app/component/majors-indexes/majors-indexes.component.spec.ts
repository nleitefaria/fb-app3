import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorsIndexesComponent } from './majors-indexes.component';

describe('MajorsIndexesComponent', () => {
  let component: MajorsIndexesComponent;
  let fixture: ComponentFixture<MajorsIndexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorsIndexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorsIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
