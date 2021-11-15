import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningWorkerComponent } from './cleaning-worker.component';

describe('CleaningWorkerComponent', () => {
  let component: CleaningWorkerComponent;
  let fixture: ComponentFixture<CleaningWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
