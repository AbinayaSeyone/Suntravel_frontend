import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableHotelsComponent } from './available-hotels.component';

describe('AvailableHotelsComponent', () => {
  let component: AvailableHotelsComponent;
  let fixture: ComponentFixture<AvailableHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
