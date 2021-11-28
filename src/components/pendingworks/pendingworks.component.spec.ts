import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingworksComponent } from './pendingworks.component';

describe('PendingworksComponent', () => {
  let component: PendingworksComponent;
  let fixture: ComponentFixture<PendingworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
