import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeHomeComponent } from './blaze-home.component';

describe('BlazeHomeComponent', () => {
  let component: BlazeHomeComponent;
  let fixture: ComponentFixture<BlazeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
