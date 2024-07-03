import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableHotelsCardComponent } from './available-hotels-card.component';

describe('AvailableHotelsCardComponent', () => {
  let component: AvailableHotelsCardComponent;
  let fixture: ComponentFixture<AvailableHotelsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableHotelsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableHotelsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
