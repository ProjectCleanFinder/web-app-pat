import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningOrderComponent } from './cleaning-order.component';

describe('CleaningOrderComponent', () => {
  let component: CleaningOrderComponent;
  let fixture: ComponentFixture<CleaningOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
