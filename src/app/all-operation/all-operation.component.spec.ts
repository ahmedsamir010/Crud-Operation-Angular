import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOperationComponent } from './all-operation.component';

describe('AllOperationComponent', () => {
  let component: AllOperationComponent;
  let fixture: ComponentFixture<AllOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllOperationComponent]
    });
    fixture = TestBed.createComponent(AllOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
