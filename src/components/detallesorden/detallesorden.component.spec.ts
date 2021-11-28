import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesordenComponent } from './detallesorden.component';

describe('DetallesordenComponent', () => {
  let component: DetallesordenComponent;
  let fixture: ComponentFixture<DetallesordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesordenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
