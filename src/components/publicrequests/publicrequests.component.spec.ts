import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicrequestsComponent } from './publicrequests.component';

describe('PublicrequestsComponent', () => {
  let component: PublicrequestsComponent;
  let fixture: ComponentFixture<PublicrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
