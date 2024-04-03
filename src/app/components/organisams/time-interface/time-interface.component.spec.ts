import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInterfaceComponent } from './time-interface.component';

describe('TimeInterfaceComponent', () => {
  let component: TimeInterfaceComponent;
  let fixture: ComponentFixture<TimeInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
