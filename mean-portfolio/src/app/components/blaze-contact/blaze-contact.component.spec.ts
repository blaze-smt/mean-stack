import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazeContactComponent } from './blaze-contact.component';

describe('BlazeContactComponent', () => {
  let component: BlazeContactComponent;
  let fixture: ComponentFixture<BlazeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
