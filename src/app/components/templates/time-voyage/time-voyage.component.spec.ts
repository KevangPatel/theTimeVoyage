import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeVoyageComponent } from './time-voyage.component';

describe('TimeVoyageComponent', () => {
  let component: TimeVoyageComponent;
  let fixture: ComponentFixture<TimeVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
