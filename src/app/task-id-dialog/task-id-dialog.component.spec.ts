import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskIdDialogComponent } from './task-id-dialog.component';

describe('TaskIdDialogComponent', () => {
  let component: TaskIdDialogComponent;
  let fixture: ComponentFixture<TaskIdDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskIdDialogComponent]
    });
    fixture = TestBed.createComponent(TaskIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
