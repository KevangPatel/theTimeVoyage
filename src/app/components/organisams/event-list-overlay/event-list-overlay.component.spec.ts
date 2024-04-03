import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListOverlayComponent } from './event-list-overlay.component';

describe('EventListOverlayComponent', () => {
  let component: EventListOverlayComponent;
  let fixture: ComponentFixture<EventListOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventListOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
