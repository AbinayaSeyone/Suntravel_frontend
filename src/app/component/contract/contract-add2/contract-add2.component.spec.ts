import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAdd2Component } from './contract-add2.component';

describe('ContractAdd2Component', () => {
  let component: ContractAdd2Component;
  let fixture: ComponentFixture<ContractAdd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractAdd2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
